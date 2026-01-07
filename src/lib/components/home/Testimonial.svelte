<script lang="ts">
import src from "$assets/logo.png";
import { generateId } from "$scripts/utils";

const titleId = generateId("testimonial-title");

let { color, title, year, comment, direction } = $props();
const isContrast = [
	"color-primary-900",
	"color-primary-700",
	"color-primary-500",
].includes(color);
</script>

<article
	aria-labelledby={titleId}
	style:background-color="var(--{color})"
	class:contrast={isContrast}
	class:reverse={direction === 'right'}
	class="wrapper"
>
	<header>
		<img {src} alt="">
		<h5 id={titleId}>{title}</h5>
		<p>BRITMUN {year}</p>
	</header>

	<blockquote class="content">
		<p>{comment}</p>
	</blockquote>
</article>

<style>
article {
	display: flex;
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

		.content {
			padding: var(--space-5) 0 var(--space-5) var(--space-7);
		}
	}

	&.contrast {
		color: var(--text-contrast);
		filter: var(--hover-contrast);

		h5 {
			color: var(--h5-contrast);
		}
	}

	&:hover {
		transform: translateY(-4px) var(--scale-hover);
		box-shadow: var(--shadow-2);
		filter: var(--hover-main);
	}

	header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: var(--space-3);
		width: clamp(180px, 30%, 250px);

		img {
			width: 64px;
			aspect-ratio: 1;
			border-radius: 50%;
			background: var(--bg-main);
			padding: 4px;
			object-fit: contain;
		}

		h5 {
			margin-top: var(--space-2);
		}

		p {
			font-size: var(--fs-1);
			opacity: 0.8;
		}
	}

	.content {
		flex: 1;
		padding: var(--space-5) var(--space-7) var(--space-5) 0;
		display: flex;
		align-items: center;

		p {
			font-size: var(--fs-4);
			line-height: var(--lh-2);
			font-style: italic;
		}
	}
}

@media (max-width: 768px) {
	article,
	article.reverse {
		flex-direction: column;

		header {
			width: 100%;
			padding-block: var(--space-5);
		}

		.content {
			padding: 0 var(--space-5) var(--space-5);
		}
	}
}
</style>
