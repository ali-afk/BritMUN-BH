import { SiteProperties } from "$data/shared";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = () => {
	const securityTxt = `Contact: mailto:${SiteProperties.contact.email}
Expires: 2027-12-31T23:59:59Z
Preferred-Languages: en
Canonical: ${SiteProperties.siteUrl}/.well-known/security.txt`;

	return new Response(securityTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
			"Cache-Control": "max-age=0, s-maxage=86400",
		},
	});
};
