export type DocumentLink = {
	label: string;
	href: string;
};

export type DocumentGroup = {
	links: DocumentLink[];
};

export const documentGroups: DocumentGroup[] = [
	{
		links: [
			{
				label: "Rules of Procedure",
				href: "https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				label: "Delegate Training Slides",
				href: "https://docs.google.com/presentation/d/1PLiG0tQns08pHSdBmXIi0cYtRPK9vX5qRwoFaGGXwy4/edit?usp=sharing",
			},			
		],
	},
	{
		links: [
			{
				label: "Sample Position Paper",
				href: "https://drive.google.com/file/d/1O0iebSAJ4PYsUJUMkh6FWJWWI14Oj1hv/view",
			},
			{
				label: "Sample Opening Speech",
				href: "https://drive.google.com/file/d/1JOsWLEuObE-yM4G4uG-gEpxW6kCzyft4/view",
			},
			{
				label: "Sample Resolution",
				href: "https://drive.google.com/file/d/17xW5SkG_zkkiSXSt8kkoZb1JyNhzgOiA/view",
			},
		],
	},
	{
		links: [
			{
				label: "List of Points",
				href: "https://drive.google.com/file/d/1PXMTf9AXATNKsCE27P3oYTio5fisMsx2/view",
			},
			{
				label: "List of Motions",
				href: "https://drive.google.com/file/d/1mGwprplH-xlAcP6BEwZdscMH9msJpfvG/view",
			},
			{
				label: "List of Clauses",
				href: "https://drive.google.com/file/d/10f7LXbm5_Gc5JL97dnFxKJq4OVvo0bAh/view",
			},
		],
	},
];
