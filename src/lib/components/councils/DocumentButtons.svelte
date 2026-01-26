<script lang="ts">
import { DefaultProperties } from "$data";
import type { DocumentGroup } from "$data/councils";
import { ColorScale } from "$types/colors";

let { documentGroups }: { documentGroups: DocumentGroup[] } = $props();
let colorSet = DefaultProperties.color.secondary;
</script>

<section>
	{#each documentGroups as group, i}
		<div
			class="card-grid--tight"
			style="--_background: {colorSet[ColorScale[i % 5] ?? 500]}"
		>
			{#each group.links as link}
				<a
					class="btn"
					href={link.href}
					target="_blank"
					rel="noopener noreferrer"
				>
					{link.label}
				</a>
			{/each}
		</div>
	{/each}
</section>

<style>
section {
	display: grid;
	gap: var(--space-4);
	margin-bottom: var(--space-6);
}

a {
	font-size: var(--fs-2);
	padding: var(--space-2) var(--space-4);
}
</style>
