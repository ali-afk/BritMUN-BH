<script lang="ts">
import { page } from "$app/state";
import { Logo } from "$assets";

let headerHeight = $state(0);
let y = $state(0);
let lastY = $state(0);
let isHidden = $state(false);

let menuOpen = $state(false);

// Runs whenever 'y' changes
$effect(() => {
	const delta = y - lastY;
	const threshold = 30;

	if (y < headerHeight) {
		isHidden = false;
	} else if (delta > threshold) {
		isHidden = true;
		menuOpen = false;
	} else if (delta < -threshold) {
		isHidden = false;
	}

	lastY = y;
});

	$effect(() => {
		page.url.pathname;
		menuOpen = false;
	});

	function toggleMenu() {
		menuOpen = !menuOpen;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<svelte:window bind:scrollY={y} />

<header bind:clientHeight={headerHeight} class:hidden={isHidden}>
	<nav class="wrapper">
		<ul>
			<li class="logo">
				<a
					href="/"
					aria-current={page.url.pathname === '/' ? 'page' : undefined}
					onclick={closeMenu}
				>
					<img src={Logo} alt="BRITMUN Logo">
				</a>
			</li>
			<li class = "navItem"><a href="/councils" class="councils" onclick={closeMenu}>Councils</a></li>

			<li class = "navItem">
				<a
					href="https://drive.google.com/drive/folders/17hrrzjpgucemAw2dpzEsceGlmHDVxcQk?usp=share_link"
					target="_blank"
					rel="noopener noreferrer"
					class="photos"
					onclick={closeMenu}
					>Event Photos</a
				>
			</li>
			<li class="cta btn navItem">
				<a target="_blank" rel="noreferrer noopener" href="/404" onclick={closeMenu}>Delegate Allocations</a>
			</li>

			<li class="burger">
				<button
					type="button"
					aria-label="Toggle menu"
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
					onclick={toggleMenu}
				>
					<span class="lines" class:open={menuOpen} aria-hidden="true"></span>
				</button>
			</li>
		</ul>

		<div id="mobile-menu" class="mobileMenu" data-open={menuOpen}>
			<a href="/councils" class="councils" onclick={closeMenu}>Councils</a>

			<a
				href="https://drive.google.com/drive/folders/17hrrzjpgucemAw2dpzEsceGlmHDVxcQk?usp=share_link"
				target="_blank"
				rel="noopener noreferrer"
				class="photos"
				onclick={closeMenu}
			>
				Event Photos
			</a>

			<a href="/404" class="ctaLink" onclick={closeMenu}>Delegate Allocations</a>
		</div>
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
	display: flex;
	align-items: center;
	gap: var(--space-6);
	width: 100%;

	li {
		transition-property: transform;

		a {
			font-family: var(--font-head);
			font-size: var(--fs-5);

			&:hover,
			&:focus-visible {
				text-decoration-color: unset; /* Forces link decoration color = link color instead of global value */
			}
		}

		&:not(.logo, .cta, .burger):hover {
			transform: translateY(-2px);
		}

		&.logo {
			margin-right: auto;
		}

		&.cta {
			--_background: var(--color-primary-700);
			a {
				color: var(--text-main);
				font-size: var(--fs-4);
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

.burger {
	display: none;
	margin-left: auto;
}

.burger button {
	all: unset;
	display: grid;
	place-items: center;
	cursor: pointer;
	padding: var(--space-2);
	border-radius: var(--radius-2);
	box-shadow: var(--shadow-weak);
	background: var(--bg-main);
}


.burger button:focus-visible {
	outline: 2px solid var(--color-primary-700);
	outline-offset: 2px;
}


.lines {
	width: 24px;
	height: 16px;
	position: relative;
	display: block;
}


.lines::before,
.lines::after {
	content: "";
	position: absolute;
	left: 0;
	right: 0;
	height: 2px;
	background: currentColor;
	transition: transform var(--transition-duration-long);
}


.lines::before {
	top: 4px;
}

.lines::after {
	bottom: 4px;
}

.lines.open::before {
	transform: translateY(3px) rotate(45deg);
}

.lines.open::after {
	transform: translateY(-3px) rotate(-45deg);
}

.mobileMenu {
	display: none;
	padding: var(--space-3);
	margin-top: var(--space-3);
	border-radius: var(--radius-3);
	box-shadow: var(--shadow-weak);
	background: var(--bg-main);
}


.mobileMenu a {
	display: block;
	padding: var(--space-3);
	font-family: var(--font-head);
	font-size: var(--fs-4);
	text-decoration: none;
}


.mobileMenu .ctaLink {
	margin-top: var(--space-2);
	box-shadow: var(--shadow-weak);
	border-radius: var(--radius-2);
	background: var(--color-primary-700);
	color: var(--text-main);
	text-align: center;
}

.mobileMenu .councils {
	color: var(--color-primary-700);
}

.mobileMenu .photos {
	color: var(--color-secondary-500);
}

@media (max-width: 768px) {
	ul {
		li:not(.logo) {
			a {
				font-size: var(--fs-4);
			}
		}

		li.navItem {
			display: none;
		}

	}
		
	
	.burger {
		display: block;
	}

		
	.mobileMenu[data-open="true"] {
		display: block;
	}
}
</style>
