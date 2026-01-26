import {
	Arableague,
	Dexter,
	Disec,
	Ecofin,
	Fantasy,
	Greysanatomy,
	Iaea,
	Jpmorgan,
	Jumanji,
	Legallyblonde,
	Psicologia,
	Sports,
	Uncsw,
	Unesco,
	Unicef,
	Unodc,
	Unsc,
	Vigilante,
	Who,
} from "$assets/councils";

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
				image: Unicef,
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: Unodc,
				backgroundGuide: "/404",
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: Ecofin,
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: Unesco,
				backgroundGuide: "/404",
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: Uncsw,
				backgroundGuide: "/404",
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: Disec,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "United Nations Security Council (UNSC)",
				image: Unsc,
				backgroundGuide: "/404",
			},
			{
				name: "Grey's Anatomy",
				image: Greysanatomy,
				backgroundGuide: "/404",
			},
			{
				name: "Legally Blonde",
				image: Legallyblonde,
				backgroundGuide: "/404",
			},
			{
				name: "J.P. Morgan",
				image: Jpmorgan,
				backgroundGuide: "/404",
			},
			{
				name: "International Sports Regulation Committee",
				image: Sports,
				backgroundGuide: "/404",
			},
			{
				name: "Confederación De Psicología",
				image: Psicologia,
				backgroundGuide: "/404",
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: Iaea,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Crisis Councils",
		councils: [
			{
				name: "Jumanji",
				image: Jumanji,
				backgroundGuide: "/404",
			},
			{
				name: "Fantasy",
				image: Fantasy,
				backgroundGuide: "/404",
			},
			{
				name: "Dexter",
				image: Dexter,
				backgroundGuide: "/404",
			},
			{
				name: "Vigilante Enforcement Division",
				image: Vigilante,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Junior Councils",
		councils: [
			{
				name: "World Health Organization (WHO)",
				image: Who,
				backgroundGuide: "/404",
			},
		],
	},
	{
		name: "Arabic",
		councils: [
			{
				name: "جامعة الدول العربية (The Arab League)",
				image: Arableague,
				backgroundGuide: "/404",
			},
		],
	},
];
