<script lang="ts">
import type { CouncilCategory } from "$data/councils";
import CouncilCard from "./CouncilCard.svelte";

let { category }: { category: CouncilCategory } = $props();
</script>

<section class="wrapper">
	<h2>{category.name}:</h2>
	<div class="card-grid">
		{#each category.councils as council}
			<CouncilCard {council} />
		{/each}
	</div>
</section>

<style>
section {
	margin-bottom: var(--space-4);
}

h2 {
	font: var(--fw-bold) var(--fs-5) / var(--lh-2) var(--font-head);
}

@media screen and (max-width: 480px) {
	h2 {
		font-size: var(--fs-6);
	}
}
</style>
