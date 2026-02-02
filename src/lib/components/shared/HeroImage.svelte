<script lang="ts">
import type { Image } from "$types/component-props";

let {
	image,
	title,
	centeredTitle = "false",
}: {
	image: Image;
	title?: string;
	centeredTitle?: "true" | "false";
} = $props();
</script>

<section>
	{#if title}
		<h1 class="title--page" class:centered={centeredTitle === "true"}>
			{title}
		</h1>
	{/if}
	<img
		src={image.url}
		alt="Through the Looking Glass"
		fetchpriority="high"
		width={image.dimensions.width}
		height={image.dimensions.height}
	>
</section>

<style>
section {
	isolation: isolate;
	background-color: var(--bg-card);
	padding-block: var(--space-6);
	position: relative;
	overflow: hidden;
}

.centered {
	z-index: 999;
	position: absolute;
	inset: 0;
}

img {
	max-height: 80dvh;
	object-fit: contain;
	box-shadow: var(--shadow-strong);
	border-radius: var(--border-radius);
	background-color: var(--color-primary-100);
}
</style>
