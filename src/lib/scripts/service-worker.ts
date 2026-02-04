/// <reference lib="webworker" />

/**
 * Cache name type for service worker caching
 */
export type CacheName = `cache-${string}`;

/**
 * Service worker caching utilities
 */

export async function addFilesToCache(cacheName: CacheName, assets: string[]) {
	const cache = await caches.open(cacheName);
	await cache.addAll(assets);
}

export async function deleteOldCache(cacheName: CacheName) {
	const keys = await caches.keys();
	for (const key of keys) {
		if (key !== cacheName) {
			await caches.delete(key);
		}
	}
}

export async function respond(
	request: Request,
	url: URL,
	cacheName: CacheName,
	assets: string[],
) {
	const cache = await caches.open(cacheName);
	const cached = await cache.match(request);

	// Strategy: Cache-first for build assets and static files
	// This ensures fast loading and offline support
	if (assets.includes(url.pathname)) {
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
