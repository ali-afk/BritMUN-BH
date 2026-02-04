/// <reference types="@sveltejs/kit" />
/// <reference lib="webworker" />
import { build, files, prerendered, version } from "$service-worker";

// Type declarations for service worker
declare let self: ServiceWorkerGlobalScope;

// Cache names
const CACHE = `cache-${version}`;
const ASSETS = [...build, ...files, ...prerendered];

// Install event - precache all static assets
self.addEventListener("install", (event: ExtendableEvent) => {
	async function addFilesToCache() {
		const cache = await caches.open(CACHE);
		await cache.addAll(ASSETS);
	}

	event.waitUntil(addFilesToCache());
});

// Activate event - clean up old caches
self.addEventListener("activate", (event: ExtendableEvent) => {
	async function deleteOldCaches() {
		const keys = await caches.keys();
		for (const key of keys) {
			if (key !== CACHE) {
				await caches.delete(key);
			}
		}
	}

	event.waitUntil(deleteOldCaches());
});

// Fetch event - serve from cache when possible
self.addEventListener("fetch", (event: FetchEvent) => {
	const { request } = event;
	const url = new URL(request.url);

	// Ignore cross-origin requests
	if (url.origin !== location.origin) return;

	// Ignore non-GET requests
	if (request.method !== "GET") return;

	async function respond() {
		const cache = await caches.open(CACHE);
		const cached = await cache.match(request);

		// Strategy: Cache-first for build assets and static files
		// This ensures fast loading and offline support
		if (ASSETS.includes(url.pathname)) {
			// Serve from cache if available, otherwise fetch and cache
			if (cached) {
				return cached;
			}

			const response = await fetch(request);
			if (response.ok) {
				cache.put(request, response.clone());
			}
			return response;
		}

		// Strategy: Network-first for HTML pages
		// This ensures users get fresh content while supporting offline
		try {
			const response = await fetch(request);

			// Cache successful HTML responses
			if (
				response.ok &&
				response.headers.get("content-type")?.includes("text/html")
			) {
				cache.put(request, response.clone());
			}

			return response;
		} catch {
			// Network failed - serve from cache if available
			if (cached) {
				return cached;
			}

			// No cache available - return a basic offline page
			return new Response("Offline - Please check your connection", {
				status: 503,
				headers: { "Content-Type": "text/plain" },
			});
		}
	}

	event.respondWith(respond());
});
