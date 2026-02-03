<script lang="ts">
import { CardSection } from "$components/shared/layout";
import { getLoadPriority } from "$scripts/utils";
import type { CouncilCategory } from "$types/component-props";
import CouncilCard from "./CouncilCard.svelte";

let { category }: { category: CouncilCategory } = $props();
</script>

<CardSection title={category.name} headingLevel="2">
	{#each category.councils as council, i}
		<CouncilCard {council} loadPriority={getLoadPriority(i, 4)} />
	{/each}
</CardSection>
