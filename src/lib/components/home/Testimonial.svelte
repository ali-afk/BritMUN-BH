<script lang="ts">
import { Logo } from "$assets/shared";
import { DesignTokens } from "$data";
import type { ColorDegrees } from "$types/colors";
import type { LoadPriority } from "$types/component-props";
import { type TestimonialData } from "$types/component-props";

interface TestimonialProps extends TestimonialData {
	loadPriority: LoadPriority;
	color: ColorDegrees;
	direction: "left" | "right";
}

let { loadPriority, color, title, year, comment, direction }: TestimonialProps =
	$props();
let colorSet = DesignTokens.color.primary;
</script>

<article
	style="--_background: {colorSet[color]}"
	class:reverse={direction === 'right'}
	class="wrapper card row lift--strong"
>
	<header class="center--column">
		<img
			class="avatar"
			src={Logo}
			alt=""
			width="64px"
			fetchpriority={loadPriority}
			loading={loadPriority === "high" ? "eager" : "lazy"}
		>
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

	header {
		justify-content: center;
		padding: var(--space-3);
		width: clamp(180px, 30%, 250px);

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
