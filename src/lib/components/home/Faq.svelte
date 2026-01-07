<script lang="ts">
import { slide } from "svelte/transition";
import toggleIcon from "$assets/home/toggle.svg";
import { standardSlide } from "$scripts/media";
import { generateId } from "$scripts/utils";

const contentId = generateId("content");
const labelId = generateId("label");

let { question, children } = $props();
let isOpen = $state(false);
</script>

<article class="wrapper">
	<h4 id="{labelId}">
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
	</h4>

	{#if isOpen}
		<div
			transition:slide={standardSlide}
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
	transition-property: box-shadow, transform;

	&:hover {
		filter: var(--hover-main);
		box-shadow: var(--shadow-2);
		transform: var(--scale-hover);
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
