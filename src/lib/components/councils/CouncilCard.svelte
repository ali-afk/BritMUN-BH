<script lang="ts">
import type { Council } from "$lib/data/councils";

let { council } = $props<{ council: Council }>();
</script>

<div class="interactive">
	<img src={council.image} alt={council.name} loading="lazy">
	<h3>{council.name}</h3>
	<a
		href={council.backgroundGuide}
		class="interactive"
		target="_blank"
		rel="noopener noreferrer"
		>Background Guide</a
	>
</div>

<style>
div {
	flex: 0 1 300px;
	padding: var(--space-4);
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	min-height: 180px;
}

img {
	height: clamp(180px, 20vw, 250px);
	object-fit: contain;
}

h3 {
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: var(--font-head);
	font-size: var(--fs-4);
	line-height: var(--lh-2);
	margin-bottom: var(--space-3);
	flex-grow: 1;
}

a {
	--color-context: var(--btn-info);
	display: inline-block;
	padding: var(--space-2) var(--space-4);
	font: var(--fw-regular) var(--fs-2) / var(--lh-3) var(--font-body);

	&:hover {
		box-shadow: initial;
	}
}

@media screen and (max-width: 480px) {
	div {
		flex: 0 1 150px;
		min-height: 120px;
	}
	img {
		height: clamp(120px, 30vw, 160px);
	}

	h3 {
		margin-top: var(--space-3);
		font-size: var(--fs-2);
	}
}
</style>
