import { quadOut } from "svelte/easing";
import { prefersReducedMotion } from "svelte/motion";
import type { MediaQuery } from "svelte/reactivity";
import type { TransitionConfig } from "svelte/transition";

/**
 * Returns a value based on whether a CSS media query matches the current viewport.
 * @param query - Media query
 * @param onTrue - Value if query returns true
 * @param onFalse - Value if query returns false
 */
export function getMediaCurrent<T>(
	query: MediaQuery,
	onTrue: T,
	onFalse: T,
): T {
	if (typeof window === "undefined") return onFalse;
	return query.current ? onTrue : onFalse;
}

export const preferredDuration = (d = 300): number => {
	return getMediaCurrent(prefersReducedMotion, 0, d);
};

export const standardSlide: TransitionConfig = {
	duration: preferredDuration(),
	easing: quadOut,
};
