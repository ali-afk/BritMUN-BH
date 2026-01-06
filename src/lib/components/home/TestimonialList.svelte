<script lang="ts">
import { testimonials } from "$data/home/";
import Testimonial from "./Testimonial.svelte";

const brandColors = [
	"purple-deep",
	"purple-main",
	"purple-mid",
	"purple-light",
	"purple-pale",
];
</script>

<section class="stack">
	<h2>What students have said about us...</h2>

	{#each testimonials as data, i}
		<Testimonial
			{...data}
			color={brandColors[i % brandColors.length]}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</section>

<style>
h2 {
	color: var(--purple-main);
}
</style>
