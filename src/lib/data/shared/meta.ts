import { Hero } from "$assets/home";
import { SiteProperties } from "$data/shared/site-properties";

/**
 * JSON-LD structured data for Organization
 * Used for search engine optimization and social media
 */
export const OrganizationData = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Organization",
	name: `BritMUN ${SiteProperties.britmunYear.roman}`,
	description: `British School of Bahrain Model United Nations Conference ${SiteProperties.year}`,
	url: SiteProperties.siteUrl,
	logo: `${SiteProperties.siteUrl}/icon-512.png`,
	email: SiteProperties.contact.email,
	sameAs: [SiteProperties.contact.tiktok, SiteProperties.contact.instagram],
});

/**
 * JSON-LD structured data for Event
 * Enables Google rich results for event listings
 */
export const EventData = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Event",
	name: `BritMUN ${SiteProperties.britmunYear.roman}`,
	description: `Model United Nations Conference in Bahrain ${SiteProperties.year}`,
	image: Hero,
	startDate: SiteProperties.eventDate.start,
	endDate: SiteProperties.eventDate.end,
	eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
	eventStatus: "https://schema.org/EventScheduled",
	organizer: {
		"@type": "Organization",
		name: "British School of Bahrain MUN Team",
		email: SiteProperties.contact.email,
	},
	location: {
		"@type": "Place",
		name: "British School of Bahrain",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Road 3241",
			addressLocality: "Hamala",
			addressCountry: "BH",
		},
		url: SiteProperties.eventAddress,
	},
	offers: {
		"@type": "Offer",
		price: SiteProperties.entryFee,
		priceCurrency: "BHD",
	},
});
