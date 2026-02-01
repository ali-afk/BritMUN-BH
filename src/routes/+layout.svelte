<script lang="ts">
import { DesignTokens } from "$data/shared";
import { registerProperties } from "$scripts/register-design-tokens";
import "$styles/index.css";
import { onMount } from "svelte";
import { Hero } from "$assets/home";

onMount(() => {
	registerProperties();
	document.documentElement.classList.add("document-loaded");
});

let { children } = $props();
</script>

<svelte:head>
	<meta name="author" content="British School of Bahrain">
	<meta name="theme-color" content={DesignTokens.color.primary[500]}>
	<meta property="og:image" content={Hero}>
	<meta property="og:type" content="website">
	<meta name="twitter:card" content="summary_large_image">
</svelte:head>

{@render children()}
