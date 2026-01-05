<script>
    import hero from "$lib/assets/hero.png"
    import background from "$lib/assets/index/hero-background.png"
</script>

<section style="--background: url({background})">
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

	section::before,section::after {
		content: "";
		position: absolute;
		inset: 0;
		background-image: var(--background);
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		z-index: 1;
		filter:
			hue-rotate(20deg)    /* Shifting purples to magenta */
			saturate(1.5)       /* Making colors vibrant */
			contrast(1.1)       /* Deepening the shadows */
			brightness(1.05)    /* Slight lift */
			sepia(0.4);         /* Forcing the green leaves toward an orange/golden tint */
	}

	section::before {
		left: -50%;
	}

	section::after {
		right: -50%;
		transform: scaleX(-1);
	}

	.hero-frame {
		position: relative;
		z-index: 2;
		width: 100%;
		display: flex;
		justify-content: center;
	}

	img {
		max-height: 80dvh;
		object-fit: contain;
		box-shadow: var(--shadow-2);
		border-radius: var(--radius);
	}
</style>
