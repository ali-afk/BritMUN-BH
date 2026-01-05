<script>
	import Testimonial from "$lib/components/index/Testimonial.svelte";
</script>

<section class="stack">
	<h2>What students have said about us...</h2>
	<Testimonial 
		title="Security Council Runner" 
		year="2019" 
		comment="I was pleasantly surprised by how much I enjoyed my experience as a runner at BRITMUN. The Security Council had engaging debates and produced impressive resolutions, making my job anything but tedious..." 
		color="purple-main"
		direction="right"
	/>

	<Testimonial 
		title="ICC Delegate" 
		year="2020" 
		comment="I had an amazing experience at BRITMUN in 2020, my first time participating in a Model United Nations conference. The level of professionalism and preparation of all the participants was impressive..." 
		color="purple-mid"
		direction = "left"
	/>

	<Testimonial 
		title="UNPFII Chair" 
		year="2023"
		comment="As a first-time chair at BRITMUN 2023, I can confidently say that this experience was both enlightening and inspiring. Leading a diverse group of delegates from around the world..." 
		color="purple-light"
		direction="right"
	/>

	<Testimonial
		title="Security Council Chair" 
		year="2024" 
		comment="Chairing in BRITMUN 2024 was an extremely memorable experience; the admin team ensured the comfort of not just their chairs, but everyone in the conference..." 
		color="purple-pale"
		direction = "left"
	/>
</section>

<style>
	h2 {
		color: var(--purple-main);
	}
</style>
