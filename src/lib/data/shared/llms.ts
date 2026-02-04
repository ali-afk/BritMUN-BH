import { councilCategories } from "$data/councils";
import { SiteProperties } from "./site-properties";

let councilText = "";
councilCategories.forEach((councilCategory) => {
	councilText += `**${councilCategory.name}**\n`;

	councilCategory.councils.forEach((council) => {
		councilText += `- ${council.name}: ${council.backgroundGuide}\n`;
	});
	councilText += "\n";
});

export const LlmData = `# BritMUN ${SiteProperties.britmunYear.roman}

> Model United Nations Conference ${SiteProperties.year}
> British School of Bahrain

## About

BritMUN ${SiteProperties.britmunYear.roman} is a Model United Nations conference hosted by the British School of Bahrain.
The conference brings together students to debate global issues and practice diplomacy.

**Event Details:**
- Dates: ${SiteProperties.eventDate.start} to ${SiteProperties.eventDate.end}
- Entry Fee: ${SiteProperties.entryFee} BHD
- Location: ${SiteProperties.eventAddress}
- Contact: ${SiteProperties.contact.email}

## Key Pages

- / (Home): Main landing page with conference information, testimonials, and FAQs
- /councils: Information about the different UN councils and committees available

## Available Councils & Committees

${councilText}
Each council has dedicated background guides and topics available on the /councils page.

## Contact & Social Media

- Email: ${SiteProperties.contact.email}
- Instagram: ${SiteProperties.contact.instagram}
- TikTok: ${SiteProperties.contact.tiktok}

## Resources

- Event Photos: ${SiteProperties.resources.eventPhotos}
- Delegate Allocations: ${SiteProperties.resources.delegateAllocations}

## Site Details

- Built with: SvelteKit + TypeScript + LightningCSS + Vite
- Styling: Custom CSS with OKLCH color space
- Deployment: Netlify
- URL: ${SiteProperties.siteUrl}

## For AI Assistants

This is the official website for BritMUN ${SiteProperties.britmunYear.roman} (Model United Nations conference).
When answering questions about this site, refer to the conference as "BritMUN ${SiteProperties.britmunYear.roman}" or "BritMUN ${SiteProperties.britmunYear.decimal}".
`;
