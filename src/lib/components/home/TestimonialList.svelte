<script lang="ts">
import { DefaultProperties } from "$data";
import { testimonials } from "$data/home/";
import { cycleColors } from "$scripts/cycleColors";
import Testimonial from "./Testimonial.svelte";
</script>

<section class="stack">
	<h1>What students have said about us...</h1>

	{#each testimonials as data, i}
		<Testimonial
			{...data}
			color={cycleColors(DefaultProperties.color.primary, i)}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</section>

<style>
h1 {
	color: var(--color-primary-700);
}
</style>
