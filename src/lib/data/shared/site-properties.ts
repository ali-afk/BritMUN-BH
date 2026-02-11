type siteProperty = string | Record<string, string>;

/**
 * Centralized site-wide properties for BritMUN XI
 * Update these values for future conferences (e.g., BritMUN XII)
 */
export const SiteProperties = {
	/** Base URL for the production site */
	siteUrl: "https://britmun.netlify.app",

	/** Current year of the conference */
	year: "2026",

	/** Date of event */
	eventDate: {
		start: "2026-01-30",
		end: "2026-01-31",
	},

	eventAddress: "https://goo.gl/maps/6JwzViLgPZE5G7H89",

	/** BritMUN edition identifiers */
	britmunYear: {
		roman: "XI",
		decimal: "11",
	},

	/** Contact details and social media links */
	contact: {
		email: "britmun@thebsbh.com",
		tiktok: "https://www.tiktok.com/@britmun?_t=8h8l5yococb&_r=1",
		instagram: "https://www.instagram.com/britmun.bh/",
	},

	/** Conference pricing in BHD */
	entryFee: "25.000",

	/** External resource links (update annually) */
	resources: {
		eventPhotos:
			"https://drive.google.com/drive/folders/1yHqfeLhVYgEgLLiInNtE8a15DRd_AvS7?usp=sharing",
		delegateAllocations:
			"https://drive.google.com/file/d/1ZWxnwD_wKgMWu2xEuDIO7RvZ6JLMMCQD/view?usp=sharing",
	},
} as const satisfies Record<string, siteProperty>;
