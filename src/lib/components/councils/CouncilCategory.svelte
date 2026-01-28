<script lang="ts">
import type { CouncilCategory } from "$data/councils";
import CouncilCard from "./CouncilCard.svelte";

let { category }: { category: CouncilCategory } = $props();
</script>

<section class="wrapper">
	<h2 class="title--section">{category.name}:</h2>
	<div class="card-grid">
		{#each category.councils as council}
			<CouncilCard {council} />
		{/each}
	</div>
</section>
