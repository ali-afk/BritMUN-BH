<script lang="ts">
import { cycleColorScale, getLoadPriority } from "$scripts/utils";
import type { TestimonialData } from "$types/component-props";
import Testimonial from "./Testimonial.svelte";

let { testimonialData }: { testimonialData: TestimonialData[] } = $props();
</script>

<section class="stack">
	<h2 id="main-content" class="title--section">
		What students have said about us...
	</h2>

	{#each testimonialData as testimonial, i}
		<Testimonial
			{...testimonial}
			loadPriority={getLoadPriority(i, 3)}
			color={cycleColorScale(i)}
			direction={i % 2 === 0 ? "right" : "left"}
		/>
	{/each}
</section>

<style>
h2 {
	color: var(--color-primary-700);
}
</style>
