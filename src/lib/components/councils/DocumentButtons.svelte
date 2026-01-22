<script lang="ts">
import { DefaultProperties } from "$data";
import { documentGroups } from "$lib/data/councils/documents";

const colorScale: (100 | 300 | 500 | 700 | 900)[] = [900, 700, 500, 300, 100];
const colors = DefaultProperties.color.secondary;
</script>

<section>
	{#each documentGroups as group, i}
		<div
			style="--color-context: 
			{colors[colorScale[i % 5] ?? 500]}"
		>
			{#each group.links as link}
				<a
					class="interactive"
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

div {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: var(--space-4);
}

a {
	font-size: var(--fs-2);
	padding-inline: var(--space-4);
	padding-block: var(--space-2);

	&:hover {
		text-decoration-color: unset;
	}
}
</style>
