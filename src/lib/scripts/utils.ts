let idCounter = 0; // This is just to make sure the generateId function doesn't return the same value twice (even if that's unlikely)

/**
 * Generates a unique, semantically prefixed ID for ARIA linking.
 * @param prefix - Defaults to 'id'. (e.g., 'faq', 'content')
 */
export function generateId(prefix: string = "id"): string {
	idCounter++;
	return `${prefix}-${idCounter}-${Math.random().toString(36).substring(2, 5)}`;
}
