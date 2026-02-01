<script>
import { Hero } from "$data/home";
</script>

<section>
	<img
		src={Hero.url}
		alt="Through the Looking Glass"
		fetchpriority="high"
		width={Hero.dimensions.width}
		height={Hero.dimensions.height}
	>
</section>

<style>
section {
	background-color: var(--bg-card);
	padding-block: var(--space-6);
	position: relative;
	overflow: hidden;
}

img {
	max-height: 80dvh;
	object-fit: contain;
	box-shadow: var(--shadow-strong);
	border-radius: var(--border-radius);
	background-color: var(--color-primary-100);
}
</style>
