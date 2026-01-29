<script lang="ts">
import type { CouncilCategory } from "$data/councils";
import CouncilCard from "./CouncilCard.svelte";

let { category }: { category: CouncilCategory } = $props();
const councilsAboveScreenFold = 5;
</script>

<section class="wrapper">
	<h2 class="title--section">{category.name}:</h2>
	<div class="card-grid">
		{#each category.councils as council, index}
			<CouncilCard
				{council}
				loadPriority={index < councilsAboveScreenFold ? "high" : "low"}
			/>
		{/each}
	</div>
</section>
