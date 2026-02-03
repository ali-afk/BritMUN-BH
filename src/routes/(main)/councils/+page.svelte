<script lang="ts">
import { CouncilCategory } from "$components/councils";
import { Meta } from "$components/shared";
import { ButtonGrid } from "$components/shared/layout";
import { SiteProperties } from "$data/shared";
import { type PageProps } from "./$types";

let { data }: PageProps = $props();

let metaDescription = `Step into the arena of international diplomacy. Explore the diverse range of committees and crisis simulations at BritMUN ${SiteProperties.britmunYear.roman}, where delegates tackle the world's most pressing challenges.`;
</script>

<Meta
	title="Councils"
	description={metaDescription}
	pageURI="/councils"
	keywords={["Councils", "Diplomatic Simulation", "Conference Hub"]}
/>

<section>
	<h1 class="title--page">COUNCILS</h1>

	<ButtonGrid groups={data.documentGroups} colorPalette="secondary" />

	{#each data.councilCategories as category}
		<CouncilCategory {category} />
	{/each}
</section>
