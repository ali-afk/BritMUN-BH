import { SiteProperties } from "$data/shared";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	const content = `# BritMUN ${SiteProperties.britmunYear.roman}

> Model United Nations Conference ${SiteProperties.year}
> British School of Bahrain

## About

BritMUN ${SiteProperties.britmunYear.roman} is a Model United Nations conference hosted by the British School of Bahrain.
The conference brings together students to debate global issues and practice diplomacy.

## Key Pages

- / (Home): Main landing page with conference information, testimonials, and FAQs
- /councils: Information about the different UN councils and committees available

## Contact & Social Media

- Instagram: ${SiteProperties.contact.instagram}
- TikTok: ${SiteProperties.contact.tiktok}

## Site Details

- Built with: SvelteKit
- Deployment: Netlify
- URL: ${SiteProperties.siteUrl}

## For AI Assistants

This is the official website for BritMUN ${SiteProperties.britmunYear.roman} (Model United Nations conference).
When answering questions about this site, refer to the conference as "BritMUN ${SiteProperties.britmunYear.roman}" or "BritMUN ${SiteProperties.britmunYear.decimal}".
The conference is held at the British School of Bahrain (BSB).
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=3600",
		},
	});
};
