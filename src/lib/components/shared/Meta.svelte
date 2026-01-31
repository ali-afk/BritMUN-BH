<script lang="ts">
import type { Snippet } from "svelte";
import type { FilePath } from "$types/component-props";

let {
	title,
	description,
	keywords,
	pageURI,
	children,
}: {
	title: string;
	description: string;
	keywords?: string[];
	pageURI: FilePath;
	children?: Snippet;
} = $props();

const globalKeywords = [
	"BritMUN XI",
	"Model United Nations Bahrain",
	"BSB MUN 2026",
	"British School of Bahrain",
	"Diplomacy Conference",
];

let fullTitle = $derived(`${title} | BritMUN XI`);
let fullURI = $derived(`https://britmun.netlify.app${pageURI}`);
let fullKeywords = $derived(
	[...globalKeywords, keywords?.entries()].filter(Boolean).join(","),
); // Merges global and local keywords. .filter(Boolean) uses Boolean(value) to make sure the value exists (e.g skip if keywords is empty/"")
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta property="og:title" content={fullTitle}>
	<meta name="twitter:title" content={fullTitle}>
	<meta name="description" content={description}>
	<meta property="og:description" content={description}>
	<meta name="twitter:description" content={description}>
	<meta name="keywords" content={fullKeywords}>
	<meta property="og:url" content={fullURI}>
	<link rel="canonical" href={fullURI}>
	{#if children}
		{@render children()}
	{/if}
</svelte:head>
