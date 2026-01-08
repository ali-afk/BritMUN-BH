<script lang="ts">
import { slide } from "svelte/transition";
import toggleIcon from "$assets/home/toggle.svg";
import { getStandardSlide } from "$scripts/transition";
import { generateId } from "$scripts/utils";

const contentId = generateId("content");

let { question, children } = $props();
let isOpen = $state(false);
</script>

<article class="wrapper interactive">
	<button
		onclick={() => (isOpen = !isOpen)}
		type="button"
		aria-expanded={isOpen}
		aria-controls="{contentId}"
	>
		<span>{question}</span>
		<img src={toggleIcon} alt="" class:active={isOpen} aria-hidden="true">
	</button>

	{#if isOpen}
		<div transition:slide={getStandardSlide()} id="{contentId}">
			<hr aria-hidden="true">
			<p>{@render children()}</p>
		</div>
	{/if}
</article>

<style>
article {
	--color-context: var(--bg-card);

	button {
		padding: var(--space-4);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		background: transparent;

		span {
			font: var(--fw-light) var(--fs-4) / var(--lh-2) var(--font-body);
		}

		img {
			margin-left: var(--space-4);
			width: var(--fs-4);
			transition-property: transform;

			&.active {
				transform: rotate(45deg);
			}
		}
	}

	div {
		color: var(--text-mute);
		display: flex;
		flex-direction: column;
		padding: 0 var(--space-4) var(--space-4);

		hr {
			margin-bottom: var(--space-4);
		}
	}
}
</style>
