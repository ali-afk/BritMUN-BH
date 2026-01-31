<script lang="ts">
import { CouncilCategory, DocumentButtons } from "$components/councils";
import { Meta } from "$components/shared";
import { type PageProps } from "./$types";

let { data }: PageProps = $props();
</script>

<Meta
	title="Councils"
	description="Step into the arena of international diplomacy. Explore the diverse range of committees and crisis simulations at BRITMUN XI, where delegates tackle the world's most pressing challenges."
	pageURI="/councils"
	keywords={["Councils", "Diplomatic Simulation", "Conference Hub"]}
/>

<section>
	<h1 class="title--page">COUNCILS</h1>

	<DocumentButtons documentGroups={data.documentGroups} />

	{#each data.councilCategories as category}
		<CouncilCategory {category} />
	{/each}
</section>

<style>
</style>
