<script>
import { Hero } from "$assets/home";
</script>

<section>
	<img
		src={Hero}
		alt="Through the Looking Glass"
		fetchpriority="high"
		width="6400"
		height="3600"
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
