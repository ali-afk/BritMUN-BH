<script lang="ts">
import {
	DesignTokens,
	EventData,
	OrganizationData,
	SiteProperties,
} from "$data/shared";
import { registerProperties } from "$scripts/register-design-tokens";
import { registerServiceWorker } from "$scripts/register-service-worker";
import "$styles/index.css";
import { onMount } from "svelte";
import { Hero } from "$data/home";

onMount(() => {
	registerProperties();
	document.documentElement.classList.add("document-loaded");
	registerServiceWorker();
});

let { children } = $props();
</script>

<svelte:head>
	<!-- Basic Meta -->
	<meta name="author" content="British School of Bahrain">
	<meta name="referrer" content="strict-origin-when-cross-origin">
	<meta name="format-detection" content="telephone=no">

	<!-- Theme & Mobile -->
	<meta name="theme-color" content={DesignTokens.color.primary[500]}>
	<meta name="mobile-web-app-capable" content="yes">
	<meta
		name="apple-mobile-web-app-status-bar-style"
		content="black-translucent"
	>
	<meta
		name="apple-mobile-web-app-title"
		content="BritMUN {SiteProperties.britmunYear.roman}"
	>

	<!-- Open Graph -->
	<meta property="og:type" content="website">
	<meta
		property="og:site_name"
		content="BritMUN {SiteProperties.britmunYear.roman}"
	>
	<meta property="og:locale" content="en_US">
	<meta property="og:image" content={Hero.url}>
	<meta property="og:image:width" content={Hero.dimensions.width.toString()}>
	<meta property="og:image:height" content={Hero.dimensions.height.toString()}>
	<meta
		property="og:image:alt"
		content="BritMUN {SiteProperties.britmunYear.roman} - Model United Nations Bahrain"
	>

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content={Hero.url}>

	{@html `<script type="application/ld+json">${OrganizationData}<\/script>`}
	{@html `<script type="application/ld+json">${EventData}<\/script>`}
</svelte:head>

{@render children()}
