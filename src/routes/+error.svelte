<script lang="ts">
import { page } from "$app/state";
</script>

<svelte:head>
	<title>{page.status} | BRITMUN</title>
</svelte:head>

<section class="center--page">
	<h1>{page.status}</h1>
	<p>{page.error?.message || "Page not found"}</p>
	<a href="/" class="btn">Return Home</a>
</section>

<style>
h1 {
	font: var(--fw-bold) var(--fs-7) / var(--lh-1) var(--font-head);
}

p {
	font-size: var(--fs-4);
	color: var(--text-mute);
}

a {
	--_background: var(--color-status-info);
	padding: var(--space-3) var(--space-5);
	font: var(--fw-regular) var(--fs-3) / var(--lh-3) var(--font-body);
}
</style>
