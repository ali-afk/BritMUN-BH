<script>
import hero from "$assets/home/hero.png";
</script>

<section>
	<div class="hero-frame wrapper">
		<img src={hero} alt="Through the Looking Glass" loading="eager">
	</div>
</section>

<style>
section {
	background-color: var(--bg-card);
	padding-block: var(--space-6);
	position: relative;
	overflow: hidden;
}

.hero-frame {
	position: relative;
	z-index: 2;
	width: 100%;
	display: flex;
	justify-content: center;
}

img {
	width: 100%;
	max-height: 80dvh;
	object-fit: contain;
	box-shadow: var(--shadow-strong);
	border-radius: var(--border-radius);
	background-color: var(--color-primary-100);
}
</style>
