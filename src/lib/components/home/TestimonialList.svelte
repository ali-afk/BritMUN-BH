<script lang="ts">
import { DefaultProperties } from "$data";
import { testimonials } from "$data/home/";
import Testimonial from "./Testimonial.svelte";

const colorScale: (100 | 300 | 500 | 700 | 900)[] = [900, 700, 500, 300, 100];
const colors = DefaultProperties.color.primary;
</script>

<section class="stack">
	<h1>What students have said about us...</h1>

	{#each testimonials as data, i}
		<Testimonial
			{...data}
			color={colors[colorScale[i % 5] ?? 500]}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</section>

<style>
h1 {
	color: var(--color-primary-700);
}
</style>
