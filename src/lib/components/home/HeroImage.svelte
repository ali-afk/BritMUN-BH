<script>
import hero from "$assets/home/hero.webp";
</script>

<section>
	<img
		src={hero}
		alt="Through the Looking Glass"
		loading="eager"
		fetchpriority="high"
		width="100%"
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
