<script lang="ts">
import { testimonials } from "$data/home/";
import Testimonial from "./Testimonial.svelte";

const colorCycle = [
	"primary-900",
	"primary-700",
	"primary-500",
	"primary-300",
	"primary-100",
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
