import { councilCategories } from "$data/councils";
import { documentGroups } from "$data/councils/documents";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
	return {
		councilCategories: councilCategories,
		documentGroups: documentGroups,
	};
};
