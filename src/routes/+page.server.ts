import { testimonials } from "$data/home";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
	return {
		testimonials: testimonials,
	};
};
