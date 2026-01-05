<script lang="ts">
	import Footer from "../lib/components/Footer.svelte";
	import Header from "../lib/components/Header.svelte";
	import "./layout.css";
	import '@fontsource/girassol';
  import '@fontsource/average';

	let { children } = $props();
</script>

<svelte:head>
	<title>BRITMUN XI | British School of Bahrain</title>

	<meta name="description" content="Join BRITMUN XI, the 11th annual Model United Nations conference hosted by the British School of Bahrain. Empowering students through diplomacy, debate, and global problem-solving." />
	<meta name="keywords" content="BRITMUN XI, Model United Nations, BSB MUN, British School of Bahrain, Bahrain Student Debate, Diplomacy Conference" />
	<meta name="author" content="British School of Bahrain" />
	<meta name="theme-color" content="#5d3568" />

	<meta property="og:title" content="BRITMUN XI - British School of Bahrain" />
	<meta property="og:description" content="Experience the 11th edition of Bahrain's premier student-led MUN. Register now for debate, diplomacy, and change." />
	<meta property="og:image" content="https://britmun.netlify.app/social-preview.png" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://britmun.com" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="BRITMUN XI" />
	<meta name="twitter:description" content="Join us for the 11th annual BRITMUN conference at BSB." />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />

<style>

</style>
