import { SiteProperties } from "$data/shared";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	const robots = `# allow crawling everything by default
User-agent: *
Disallow:

# Sitemap location
Sitemap: ${SiteProperties.siteUrl}/sitemap.xml`;

	return new Response(robots, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=3600",
		},
	});
};
