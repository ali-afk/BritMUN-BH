import arableague from "$assets/councils/arableague.png";
import dexter from "$assets/councils/dexter.png";
import disec from "$assets/councils/disec.png";
import ecofin from "$assets/councils/ecofin.png";
import fantasy from "$assets/councils/fantasy.png";
import greysanatomy from "$assets/councils/greysanatomy.png";
import iaea from "$assets/councils/iaea.png";
import jpmorgan from "$assets/councils/jpmorgan.png";
import jumanji from "$assets/councils/jumanji.png";
import legallyblonde from "$assets/councils/legallyblonde.png";
import psicologia from "$assets/councils/psicologia.png";
import sports from "$assets/councils/sports.svg";
import uncsw from "$assets/councils/uncsw.webp";
import unesco from "$assets/councils/unesco.png";
import unicef from "$assets/councils/unicef.png";
import unodc from "$assets/councils/unodc.png";
import unsc from "$assets/councils/unsc.png";
import vigilante from "$assets/councils/vigilante.png";
import who from "$assets/councils/who.png";

export type Council = {
	name: string;
	image: string;
	backgroundGuide: string;
};

export type CouncilCategory = {
	name: string;
	councils: Council[];
};

export const councilCategories: CouncilCategory[] = [
	{
		name: "General Assembly",
		councils: [
			{
				name: "United Nations International Children's Emergency Fund (UNICEF)",
				image: unicef,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: unodc,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: ecofin,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: unesco,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: uncsw,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: disec,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "United Nations Security Council (UNSC)",
				image: unsc,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Grey's Anatomy",
				image: greysanatomy,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Legally Blonde",
				image: legallyblonde,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "J.P. Morgan",
				image: jpmorgan,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "International Sports Regulation Committee",
				image: sports,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Confederación De Psicología",
				image: psicologia,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: iaea,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
		],
	},
	{
		name: "Crisis Councils",
		councils: [
			{
				name: "Jumanji",
				image: jumanji,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Fantasy",
				image: fantasy,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Dexter",
				image: dexter,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
			{
				name: "Vigilante Enforcement Division",
				image: vigilante,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
		],
	},
	{
		name: "Junior Councils",
		councils: [
			{
				name: "World Health Organization (WHO)",
				image: who,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
		],
	},
	{
		name: "Arabic",
		councils: [
			{
				name: "جامعة الدول العربية (The Arab League)",
				image: arableague,
				backgroundGuide:
					"https://drive.google.com/file/d/1uwLOZ5cHsZGWf32vPsCDthMege1ify6c/view?usp=sharing",
			},
		],
	},
];
