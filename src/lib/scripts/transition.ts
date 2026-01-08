import BezierEasing from "bezier-easing";
import * as svelteEasings from "svelte/easing";
import { prefersReducedMotion } from "svelte/motion";
import type { SlideParams } from "svelte/transition";
import { DefaultProperties } from "$data";
import { getMediaCurrent, queryCssProperty } from "./media";
import { parseCssTime } from "./utils";

const CSS_TO_SVELTE_MAP: Record<string, string> = {
	"ease-in": "quadIn",
	"ease-out": "quadOut",
	"ease-in-out": "quadInOut",
};

const CSS_NATIVE_COORDS: Record<string, number[]> = {
	ease: [0.25, 0.1, 0.25, 1.0], // The default browser easing
	default: [0.25, 0.1, 0.25, 1.0],
};

/**
 * Returns a JS easing function (0-1 -> 0-1)
 * Prioritizes: Svelte Internal Easings -> CSS Custom Property -> Default Fallback
 */
export function getTransitionEasing(): (t: number) => number {
	const raw =
		queryCssProperty("transition-easing") ||
		DefaultProperties.transition.easing.value;

	// Tries to map css keyword to existing svelte keyword if they differ
	const svelteKey = CSS_TO_SVELTE_MAP[raw] || raw;

	if (svelteKey in svelteEasings) {
		return (svelteEasings as any)[svelteKey];
	}

	// Tries to map non-svelte css keyword to coords
	let coords = CSS_NATIVE_COORDS[raw] || raw;

	// If here then it's a custom bezier
	coords = parseBezierCoords(raw);
	return BezierEasing(coords[0], coords[1], coords[2], coords[3]);
}

/**
 * Parses CSS easing functions into coords.
 */
function parseBezierCoords(bezier: string): number[] {
	const regex = /cubic-bezier\(([^)]+)\)/;
	let match = bezier.match(regex);

	if (match) {
		return match[1].split(",").map((n) => parseFloat(n.trim()));
	}

	// Fallback
	match = DefaultProperties.transition.easing.value.match(regex);
	return match![1].split(",").map((n) => parseFloat(n.trim()));
}

/**
 * Returns 0 if prefersReducedMotion is true, else returns provided duration.
 * Defaults to "transition-duration" property if duration not provided.
 */
export function getPreferredTransitionDuration(milliseconds?: number): number {
	const raw =
		milliseconds ??
		parseCssTime(queryCssProperty("transition-duration-medium")); // TODO: Make sure that parseCSSTime returns value if property not found.
	const duration = Number.isNaN(raw)
		? parseInt(DefaultProperties.transition.duration.medium, 10)
		: raw;

	return getMediaCurrent(prefersReducedMotion, 0, duration);
}

/**
 * Standard transition object for Svelte directives
 * usage: transition:slide={getStandardSlide(options?)}
 */
export function getStandardSlide(options?: SlideParams): SlideParams {
	return {
		duration: getPreferredTransitionDuration(),
		easing: getTransitionEasing(),
		...options,
	};
}
