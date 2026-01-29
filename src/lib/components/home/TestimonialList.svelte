<script lang="ts">
import { type TestimonialData } from "$data/home";
import { ColorScale } from "$types/colors";
import Testimonial from "./Testimonial.svelte";

let { testimonialData }: { testimonialData: TestimonialData[] } = $props();
const testimonialsAboveScreenFold = 3;
</script>

<section class="stack">
	<!-- .skip-link skips to #main-content -->
	<h1 id="main-content" class="title--section">
		What students have said about us...
	</h1>

	{#each testimonialData as testimonial, i}
		<Testimonial
			{...testimonial}
			loadPriority={i < testimonialsAboveScreenFold ? "high" : "low"}
			color={ColorScale[i % 5] ?? 500}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</section>

<style>
h1 {
	color: var(--color-primary-700);
}
</style>
