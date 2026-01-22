<script lang="ts">
import { CouncilCategory, DocumentButtons } from "$components/councils";
import { councilCategories } from "$data/councils";
</script>

<svelte:head>
	<title>Councils | BRITMUN</title>
</svelte:head>

<section>
	<h1>COUNCILS</h1>

	<DocumentButtons />

	{#each councilCategories as category}
		<CouncilCategory {category} />
	{/each}
</section>

<style>
h1 {
	font: var(--fw-bold) var(--fs-6) / var(--lh-1) var(--font-head);
	text-align: center;
	margin-bottom: var(--space-6);
}
</style>
