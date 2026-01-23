<script lang="ts">
import { CouncilCategory, DocumentButtons } from "$components/councils";
import { councilCategories } from "$data/councils";
</script>

<svelte:head>
	<title>Councils | BRITMUN</title>
</svelte:head>

<section>
	<h1 class="section-title">COUNCILS</h1>

	<DocumentButtons />

	{#each councilCategories as category}
		<CouncilCategory {category} />
	{/each}
</section>

<style>
</style>
