<script lang="ts">
import { page } from "$app/state";
import src from "$assets/logo.png";

let headerHeight = $state(0);
let y = $state(0);
let lastY = $state(0);
let isHidden = $state(false);

// Runs whenever 'y' changes
$effect(() => {
	const delta = y - lastY;
	const threshold = 30;

	if (y < headerHeight) {
		isHidden = false;
	} else if (delta > threshold) {
		isHidden = true;
	} else if (delta < -threshold) {
		isHidden = false;
	}

	lastY = y;
});
</script>

<svelte:window bind:scrollY={y} />

<header bind:clientHeight={headerHeight} class:hidden={isHidden}>
	<nav class="wrapper">
		<ul>
			<li class="logo">
				<a
					href="/"
					aria-current={page.url.pathname === '/' ? 'page' : undefined}
				>
					<img {src} alt="BRITMUN Logo">
				</a>
			</li>
			<li><a href="/councils" class="councils">Councils</a></li>
			<li>
				<a
					href="https://drive.google.com/drive/folders/17hrrzjpgucemAw2dpzEsceGlmHDVxcQk?usp=share_link"
					target="_blank"
					rel="noopener noreferrer"
					class="photos"
					>Event Photos</a
				>
			</li>
		</ul>
	</nav>
</header>

<style>
header {
	background-color: var(--bg-main);
	position: sticky;
	top: 0;
	z-index: 1000;
	box-shadow: var(--shadow-weak);
	transition-property: transform;
	transition-duration: var(--transition-duration-long);
	will-change: transform;
	padding: var(--space-4);

	&.hidden {
		transform: translateY(-100%);
	}
}

ul {
	align-items: center;
	gap: var(--space-7);
	width: 100%;

	li {
		transition-property: transform;

		&:not(.logo):hover {
			transform: translateY(-2px);
		}

		&.logo {
			margin-right: auto;
		}

		a {
			font-family: var(--font-head);
			font-size: var(--fs-5);

			&:hover,
			&:focus-visible {
				text-decoration-color: unset; /* Forces link decoration color = link color instead of global value */
			}
		}

		.councils {
			color: var(--color-primary-700);
		}
		.photos {
			color: var(--color-secondary-500);
		}
	}
}

img {
	min-width: 80px;
	width: clamp(8rem, 6rem + 5vw, 12rem);
	height: auto;
}

@media (max-width: 480px) {
	ul {
		li:not(.logo) {
			a {
				font-size: var(--fs-4);
			}
		}
	}
}
</style>
