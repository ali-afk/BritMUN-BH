<script lang="ts">
import { DesignTokens, SiteProperties } from "$data/shared";
import { registerProperties } from "$scripts/register-design-tokens";
import "$styles/index.css";
import { onMount } from "svelte";
import { Hero } from "$data/home";

onMount(() => {
	registerProperties();
	document.documentElement.classList.add("document-loaded");
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
	<meta name="apple-mobile-web-app-capable" content="yes">
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

	<!-- JSON-LD Structured Data: Organization -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Organization",
		"name": "BritMUN ${SiteProperties.britmunYear.roman}",
		"description": "British School of Bahrain Model United Nations Conference ${SiteProperties.year}",
		"url": "${SiteProperties.siteUrl}",
		"logo": "${SiteProperties.siteUrl}/icon-512.png",
		"email": "${SiteProperties.contact.email}",
		"sameAs": [
			"${SiteProperties.contact.tiktok}",
			"${SiteProperties.contact.instagram}"
		]
	}
	<\/script>`}

	<!-- JSON-LD Structured Data: Event -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "Event",
		"name": "BritMUN ${SiteProperties.britmunYear.roman}",
		"description": "Model United Nations Conference in Bahrain ${SiteProperties.year}",
		"image": "${Hero.url}"
		"startDate": "${SiteProperties.eventDate.start}",
		"endDate": "${SiteProperties.eventDate.end}",
		"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
		"eventStatus": "https://schema.org/EventScheduled",
		"organizer": {
			"@type": "Organization",
			"name": "British School of Bahrain MUN Team",
			"email": "${SiteProperties.contact.email}"
		},
		"location": {
			"@type": "Place",
			"name": "British School of Bahrain",
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "Road 3241",
				"addressLocality": "Hamala",
				"addressCountry": "BH"
			},
			"url": "${SiteProperties.eventAddress}"
		},
		"offers": {
			"@type": "Offer",
			"price": "${SiteProperties.entryFee}",
			"priceCurrency": "BHD"
		}
	}
	<\/script>`}
</svelte:head>

{@render children()}
