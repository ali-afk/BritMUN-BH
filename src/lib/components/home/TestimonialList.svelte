<script lang="ts">
import { testimonials } from "$data/home/";
import Testimonial from "./Testimonial.svelte";

const colorCycle = [
	"color-primary-900",
	"color-primary-700",
	"color-primary-500",
	"color-primary-300",
	"color-primary-100",
];
</script>

<section class="stack">
	<h2>What students have said about us...</h2>

	{#each testimonials as data, i}
		<Testimonial
			{...data}
			color={colorCycle[i % colorCycle.length]}
			direction={i % 2 === 0 ? 'right' : 'left'}
		/>
	{/each}
</section>
