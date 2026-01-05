let idCounter = 0; // This is just to make sure the generateId function doesn't return the same value twice (even if that's unlikely)

/**
 * Generates a unique, semantically prefixed ID for ARIA linking.
 * @param prefix - Descriptive string (e.g., 'faq', 'btn', 'content')
 */
export function generateId(prefix: string = "id"): string {
	idCounter++;
	return `${prefix}-${idCounter}-${Math.random().toString(36).substring(2, 5)}`;
}

/**
 * Returns a value based on whether a CSS media query matches the current viewport.
 * @param query - Media query
 * @param onTrue - Value if query returns true
 * @param onFalse - Value if query returns false
 */
export function getMediaValue<T>(query: string, onTrue: T, onFalse: T): T {
	if (typeof window === "undefined") return onFalse;

	return window.matchMedia(query).matches ? onTrue : onFalse;
}
