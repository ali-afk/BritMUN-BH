<script lang="ts">
import { CouncilCategory, DocumentButtons } from "$components/councils";
import { type PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<svelte:head>
	<title>Councils | BRITMUN</title>
</svelte:head>

<section>
	<h1 class="title--page">COUNCILS</h1>

	<DocumentButtons documentGroups={data.documentGroups} />

	{#each data.councilCategories as category}
		<CouncilCategory {category} />
	{/each}
</section>

<style>
</style>
