<script lang="ts">
import { quadOut } from "svelte/easing";
import { slide } from "svelte/transition";
import toggleIcon from "$assets/home/toggle.svg";
import { generateId, getMediaValue } from "$scripts/utils";

const duration = getMediaValue("(prefers-reduced-motion: reduce)", 0, 300);
const contentId = generateId("content");
const labelId = generateId("label");

let { question, children } = $props();
let isOpen = $state(false);
</script>

<article class="wrapper">
	<h2 id="{labelId}">
		<button
			onclick={() => (isOpen = !isOpen)}
			type="button"
			aria-expanded={isOpen}
			aria-controls="{contentId}"
		>
			<span>{question}</span>
			<img
				src={toggleIcon}
				alt="Toggle"
				class:active={isOpen}
				aria-hidden="true"
			>
		</button>
	</h2>

	{#if isOpen}
		<div
			transition:slide={{ duration, easing: quadOut }}
			id="{contentId}"
			role="region"
			aria-labelledby="{labelId}"
		>
			<hr>
			<p>{@render children()}</p>
		</div>
	{/if}
</article>

<style>
article {
	background: var(--bg-card);
	border-radius: var(--radius);
	box-shadow: var(--shadow-1);

	&:hover {
		filter: brightness(0.96);
		box-shadow: var(--shadow-2);
	}

	button {
		padding: var(--space-4);
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		text-align: left;
		background: transparent;
		box-shadow: none;

		span {
			font-weight: var(--fw-light);
			font-family: var(--font-body);
			font-size: var(--fs-4);
			color: var(--purple-deep);
		}

		img {
			margin-left: var(--space-4);
			width: var(--fs-4);

			&.active {
				transform: rotate(45deg);
			}
		}
	}

	div {
		color: var(--text-muted);
		display: flex;
		flex-direction: column;
		padding: 0 var(--space-4) var(--space-4);

		hr {
			margin-bottom: var(--space-4);
		}
	}
}
</style>
