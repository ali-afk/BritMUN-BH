import { SiteProperties } from "./site-properties";

/**
 * Team credits and contributor information for humans.txt
 * Update this file when new team members contribute to the website
 */

export interface TeamMember {
	name: string;
	email?: string;
	linkedin?: string;
}

export interface YearCredits {
	year: string;
	members: TeamMember[];
}

/**
 * Team credits by year
 * Add new years at the top
 */
export const teamCredits: YearCredits[] = [
	{
		year: "2026",
		members: [
			{
				name: "Ali Hussain Ali",
				email: "ali.hussain.ali.oun@gmail.com",
				linkedin:
					"https://www.linkedin.com/in/ali-hussain-ali-a1a9082b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
			{
				name: "Amr AlSaleh",
				email: "alsalehamr@gmail.com",
				linkedin:
					"https://www.linkedin.com/in/amr-alsaleh-alsaleh-348a55327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
			},
		],
	},
];

/**
 * Generate humans.txt content
 */
export const HumansData = `/* TEAM */
Organization: British School of Bahrain MUN Team
Location: Bahrain
Email: ${SiteProperties.contact.email}
Instagram: ${SiteProperties.contact.instagram}
Tiktok: ${SiteProperties.contact.tiktok}

/* CREDITS */
${teamCredits
	.map(
		(yearGroup) => `--- ${yearGroup.year} ---
${yearGroup.members
	.map(
		(member) =>
			`- ${member.name}${member.email ? `\nEmail: ${member.email}` : ""}${member.linkedin ? `\nLinkedIn: ${member.linkedin}` : ""}`,
	)
	.join("\n\n")}
--- ${yearGroup.year} ---`,
	)
	.join("\n\n")}

/* SITE */
Last update: ${new Date().toISOString().split("T")[0]}
Stack: SvelteKit, TypeScript, LightningCSS, Biome, Vite
Deployment: Netlify
Fonts: Average, Girassol`;
