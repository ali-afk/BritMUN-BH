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
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: unodc,
				backgroundGuide: "/404",
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: ecofin,
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: unesco,
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: uncsw,
				backgroundGuide: "/404",
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: disec,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "United Nations Security Council (UNSC)",
				image: unsc,
				backgroundGuide: "/404",
			},
			{
				name: "Grey's Anatomy",
				image: greysanatomy,
				backgroundGuide: "/404",
			},
			{
				name: "Legally Blonde",
				image: legallyblonde,
				backgroundGuide: "/404",
			},
			{
				name: "J.P. Morgan",
				image: jpmorgan,
				backgroundGuide: "/404",
			},
			{
				name: "International Sports Regulation Committee",
				image: sports,
				backgroundGuide: "/404",
			},
			{
				name: "Confederación De Psicología",
				image: psicologia,
				backgroundGuide: "/404",
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: iaea,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Crisis Councils",
		councils: [
			{
				name: "Jumanji",
				image: jumanji,
				backgroundGuide: "/404",
			},
			{
				name: "Fantasy",
				image: fantasy,
				backgroundGuide: "/404",
			},
			{
				name: "Dexter",
				image: dexter,
				backgroundGuide: "/404",
			},
			{
				name: "Vigilante Enforcement Division",
				image: vigilante,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Junior Councils",
		councils: [
			{
				name: "World Health Organization (WHO)",
				image: who,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Arabic",
		councils: [
			{
				name: "جامعة الدول العربية (The Arab League)",
				image: arableague,
				backgroundGuide: "/404",
			},
		],
	},
];
