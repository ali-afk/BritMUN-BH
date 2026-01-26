<script lang="ts">
import { Header } from "$components";
import { DefaultProperties } from "$data";
import { registerProperties } from "$scripts/register-properties";
import "$styles/index.css";
import { onMount } from "svelte";
import { Hero } from "$assets/home";
import { optimiseInteractive } from "$scripts/interactive";

onMount(() => {
	optimiseInteractive();
	registerProperties();
	document.documentElement.classList.add("document-loaded");
});

let { children } = $props();
</script>

<svelte:head>
	<title>BRITMUN XI | British School of Bahrain</title>

	<meta
		name="description"
		content="Join BRITMUN XI, the 11th annual Model United Nations conference hosted by the British School of Bahrain. Empowering students through diplomacy, debate, and global problem-solving."
	>
	<meta
		name="keywords"
		content="BRITMUN XI, Model United Nations, BSB MUN, British School of Bahrain, Bahrain Student Debate, Diplomacy Conference"
	>
	<meta name="author" content="British School of Bahrain">
	<meta name="theme-color" content={DefaultProperties.color.primary[500]}>

	<meta property="og:title" content="BRITMUN XI - British School of Bahrain">
	<meta
		property="og:description"
		content="Experience the 11th edition of Bahrain's premier student-led MUN. Register now for debate, diplomacy, and change."
	>
	<meta property="og:image" content={Hero}>
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://britmun.netlify.app">

	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="BRITMUN XI">
	<meta
		name="twitter:description"
		content="Join us for the 11th annual BRITMUN conference at BSB Bahrain."
	>
</svelte:head>

<Header />
<a href="#main-content" class="skip-link">Skip to main content</a>
<main>{@render children()}</main>

<style>
</style>
