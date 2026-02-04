import { SiteProperties } from "$data/shared";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	const humans = `/* TEAM */
Organization: British School of Bahrain MUN Team
Location: Bahrain
Email: ${SiteProperties.contact.email}
Instagram: ${SiteProperties.contact.instagram}
Tiktok: ${SiteProperties.contact.tiktok}

/* CREDITS */
--- 2026 ---
- Ali Hussain Ali
Email: ali.hussain.ali.oun@gmail.com
LinkedIn: https://www.linkedin.com/in/ali-hussain-ali-a1a9082b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app

- Amr AlSaleh
Email: alsalehamr@gmail.com
LinkedIn: https://www.linkedin.com/in/amr-alsaleh-alsaleh-348a55327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
--- 2026 ---

/* SITE */
Last update: ${new Date().toISOString().split("T")[0]}
Stack: SvelteKit, TypeScript, LightningCSS, Biome, Vite
Deployment: Netlify
Fonts: Average, Girassol`;

	return new Response(humans, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=86400",
		},
	});
};
