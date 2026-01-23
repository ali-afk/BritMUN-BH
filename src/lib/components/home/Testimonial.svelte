<script lang="ts">
import src from "$assets/logo.png";

let { color, title, year, comment, direction } = $props();
</script>

<article
	style="--color-context: {color}"
	class:reverse={direction === 'right'}
	class="wrapper interactive"
>
	<header class="center">
		<img {src} alt="" width="64px">
		<h2>{title}</h2>
		<h3>
			BRITMUN <time datetime={year}>{year}</time>
		</h3>
	</header>

	<blockquote class="content">
		<p>{comment}</p>
	</blockquote>
</article>

<style>
article {
	display: flex;
	position: relative;

	&::before {
		content: "“";
		position: absolute;
		inset: -5rem 0 0 1rem;
		font-size: 14rem;
		opacity: 0.1;
	}

	&.reverse {
		flex-direction: row-reverse;

		blockquote {
			padding: var(--space-5) 0 var(--space-5) var(--space-7);
		}
	}

	:where(&:hover) {
		transform: translateY(-4px);
	}

	header {
		justify-content: center;
		padding: var(--space-3);
		width: clamp(180px, 30%, 250px);

		img {
			aspect-ratio: 1;
			border-radius: 50%;
			background: var(--bg-main);
			padding: 4px;
			object-fit: contain;
		}

		h2 {
			font-size: var(--fs-2);
			margin-top: var(--space-2);
		}

		h3 {
			font-size: var(--fs-1);
			opacity: 0.8;
		}
	}

	blockquote {
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

		blockquote {
			padding: 0 var(--space-5) var(--space-5);
		}
	}
}
</style>
