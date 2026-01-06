<script lang="ts">
import src from "$assets/logo.png";

let { color, title, year, comment, direction } = $props();
const isLight = ["purple-light", "purple-pale"].includes(color);
</script>

<article
	style:background-color="var(--{color})"
	class:light-theme={isLight}
	class:reverse={direction === 'right'}
	class="wrapper"
>
	<aside>
		<img {src} alt="{title} logo">
		<h3>{title}</h3>
		<p>BRITMUN {year}</p>
	</aside>

	<div class="content">
		<p>{comment}</p>
	</div>
</article>

<style>
article {
	display: flex;
	color: var(--text-contrast);
	border-radius: var(--radius);
	border: 1px solid var(--border-subtle);
	box-shadow: var(--shadow-1);
	transition-property: transform, box-shadow;
	position: relative;
	overflow: hidden;

	&::before {
		content: "“";
		position: absolute;
		inset: -5rem 0 0 1rem;
		font-size: 14rem;
		opacity: 0.1;
	}

	&.reverse {
		flex-direction: row-reverse;
	}

	&.light-theme {
		--text-contrast: var(--text-main);
	}

	&:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-2);
	}

	aside {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: var(--space-4);
		width: clamp(180px, 30%, 250px);
		background: rgba(0, 0, 0, 0.1);

		img {
			width: 64px;
			aspect-ratio: 1;
			border-radius: 50%;
			background: var(--white);
			padding: 4px;
			object-fit: contain;
		}

		h3 {
			font-size: var(--fs-3);
			margin-top: var(--space-2);
		}
		p {
			font-size: var(--fs-1);
			opacity: 0.8;
		}
	}

	.content {
		flex: 1;
		padding: var(--space-5) var(--space-6);
		display: flex;
		align-items: center;

		p {
			font-size: var(--fs-4);
			line-height: 1.5;
			font-style: italic;
		}
	}
}

@media (max-width: 768px) {
	article,
	article.reverse {
		flex-direction: column;

		aside {
			width: 100%;
			padding-block: var(--space-5);
		}
	}
}
</style>
