<script lang="ts">
import { DefaultProperties } from "$data";
import { documentGroups } from "$data/councils/documents";
import { cycleColors } from "$scripts/cycleColors";
</script>

<section>
	{#each documentGroups as group, i}
		<div
			class="card-grid--tight"
			style="--_background: {cycleColors(DefaultProperties.color.secondary, i)}"
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
