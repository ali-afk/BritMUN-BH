<script lang="ts">
import type { Snippet } from "svelte";
import { slide } from "svelte/transition";
import { ToggleIcon } from "$assets/home";
import { standard } from "$scripts/transition";
import { generateId } from "$scripts/utils";

const contentId = generateId("content");
let isOpen = $state(false);
let { question, children }: { question: string; children: Snippet } = $props();
</script>

<article class="wrapper card">
	<details bind:open={isOpen} name="faq">
		<summary
			class="row--between"
			aria-expanded={isOpen}
			aria-controls="{contentId}"
		>
			{question}
			<img src={ToggleIcon} alt="" aria-hidden="true">
		</summary>
	</details>
	{#if isOpen}
		<div id={contentId} transition:standard={slide}>
			<hr aria-hidden="true">
			<p>{@render children()}</p>
		</div>
	{/if}
</article>

<style>
article {
	--_background: var(--bg-card);
	padding-inline: var(--space-4);

	p {
		padding-block: var(--space-4);
		color: var(--text-mute);
	}

	summary {
		padding-block: var(--space-4);
		font: var(--fw-light) var(--fs-4) / var(--lh-2) var(--font-body);

		img {
			margin-left: var(--space-4);
			width: var(--fs-4);
			transition-property: transform;
		}
	}

	details[open] summary img {
		transform: rotate(45deg);
	}
}
</style>
