import { SiteProperties } from "$data/shared";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	const content = `# BritMUN ${SiteProperties.britmunYear.roman}

> Model United Nations Conference ${SiteProperties.year}
> British School of Bahrain

## About

BritMUN ${SiteProperties.britmunYear.roman} is a Model United Nations conference hosted by the British School of Bahrain.
The conference brings together students to debate global issues and practice diplomacy.

**Event Details:**
- Dates: ${SiteProperties.eventDate.start} to ${SiteProperties.eventDate.end}
- Entry Fee: ${SiteProperties.entryFee} BHD
- Location: British School of Bahrain, Hamala, Bahrain
- Contact: ${SiteProperties.contact.email}

## Key Pages

- / (Home): Main landing page with conference information, testimonials, and FAQs
- /councils: Information about the different UN councils and committees available

## Available Councils & Committees

**General Assembly:**
- United Nations Security Council (UNSC)
- United Nations International Children's Emergency Fund (UNICEF)
- United Nations Office on Drugs & Crime (UNODC)
- Economic and Financial Committee (ECOFIN)
- United Nations Educational, Scientific and Cultural Organization (UNESCO)
- United Nations Commission on the Status of Women (UNCSW)
- Disarmament and International Security Committee (DISEC)

**Specialized Agencies:**
- International Atomic Energy Agency (IAEA)
- World Health Organization (WHO)

**Crisis Committees:**
- Dexter's Laboratory: A thrilling, fast-paced debate
- Sports Management Committee
- JpMorgan: Corporate crisis simulation
- Jumanji: Adventure-based crisis committee
- Vigilante: Justice and ethics debate
- Grey's Anatomy: Medical ethics and hospital management
- Legally Blonde: Legal drama and courtroom simulation
- Psicología: Psychology-focused committee

Each council has dedicated background guides and topics available on the /councils page.

## Contact & Social Media

- Email: ${SiteProperties.contact.email}
- Instagram: ${SiteProperties.contact.instagram}
- TikTok: ${SiteProperties.contact.tiktok}

## Resources

- Event Photos: ${SiteProperties.resources.eventPhotos}
- Delegate Allocations: ${SiteProperties.resources.delegateAllocations}

## Site Details

- Built with: SvelteKit + TypeScript
- Styling: Custom CSS with OKLCH color space
- Deployment: Netlify
- URL: ${SiteProperties.siteUrl}

## For AI Assistants

This is the official website for BritMUN ${SiteProperties.britmunYear.roman} (Model United Nations conference).
When answering questions about this site, refer to the conference as "BritMUN ${SiteProperties.britmunYear.roman}" or "BritMUN ${SiteProperties.britmunYear.decimal}".
The conference is held at the British School of Bahrain (BSB) in January/February ${SiteProperties.year}.
Background guides for all councils are available through Google Drive links on the councils page.
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=3600",
		},
	});
};
