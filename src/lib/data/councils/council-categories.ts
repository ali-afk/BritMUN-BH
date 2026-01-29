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
	width: number;
	height: number;
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
				name: "United Nations Security Council (UNSC)",
				image: Unsc,
				backgroundGuide:
					"https://drive.google.com/file/d/1g_TqqgWMifs7Wo8J0hvh0Juj3hXg-ABe/view?usp=sharing",
				width: 800,
				height: 681,
			},
			{
				name: "United Nations International Children's Emergency Fund (UNICEF)",
				image: Unicef,
				backgroundGuide:
					"https://drive.google.com/file/d/1ee-S6c03bGHKEwnpnak5Xwj7V7ro1Se5/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: Unodc,
				backgroundGuide:
					"https://drive.google.com/file/d/16hPcc99DiJDj0CD5eBUKezL-DfDGfm8C/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: Ecofin,
				backgroundGuide:
					"https://drive.google.com/file/d/1OiyxhT6J600xAg-BrPzaPtJ2SYnZZ9gd/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: Unesco,
				backgroundGuide:
					"https://drive.google.com/file/d/1q2IGk9lO9FXc9AtGtgTJtoMqoHmiRQVJ/view?usp=sharing",
				width: 800,
				height: 450,
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: Uncsw,
				backgroundGuide:
					"https://drive.google.com/file/d/1Y_1ael_FWf9dUaXZuahlNeLAV6KER2Ae/view?usp=sharing",
				width: 2054,
				height: 2022,
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: Disec,
				backgroundGuide:
					"https://drive.google.com/file/d/1udG0mCDd5OsPgzlpxZ7QzXs1XB9J5VsT/view?usp=sharing",
				width: 800,
				height: 800,
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "Grey's Anatomy",
				image: Greysanatomy,
				backgroundGuide:
					"https://drive.google.com/file/d/1SQYb_7PWYqum17LNjHCnttOUUe2Wgm7F/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "Legally Blonde",
				image: Legallyblonde,
				backgroundGuide:
					"https://drive.google.com/file/d/1C6tIT0jhAysAWGlo5TQmCzxF5bIyQFDp/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "J.P. Morgan",
				image: Jpmorgan,
				backgroundGuide:
					"https://drive.google.com/file/d/1KiEjksJbgcAWxmWssqmlP3piOLSgOGfu/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "International Sports Regulation Committee",
				image: Sports,
				backgroundGuide:
					"https://drive.google.com/file/d/1XY7MobDGXa2XWpv-EyyCa-5p2W7dptDC/view?usp=sharing",
				width: 342,
				height: 158,
			},
			{
				name: "Confederación De Psicología",
				image: Psicologia,
				backgroundGuide:
					"https://drive.google.com/file/d/1nSU_Vovee_y5mEKFKMsTalVaHbTQz2k4/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: Iaea,
				backgroundGuide:
					"https://drive.google.com/file/d/15bFaDAjEHhm8HGZAAIpdjBERPC9l3XlY/view?usp=drive_link",
				width: 800,
				height: 698,
			},
		],
	},
	{
		name: "Crisis Councils",
		councils: [
			{
				name: "Jumanji",
				image: Jumanji,
				backgroundGuide:
					"https://drive.google.com/file/d/10SwQMEieTuMKA6IXluUhED_OQFbGJlFO/view?usp=sharing",
				width: 800,
				height: 303,
			},
			{
				name: "Fantasy",
				image: Fantasy,
				backgroundGuide:
					"https://drive.google.com/file/d/1420ZbBpbL0LlUpKZxFk6Ki8pSxxZ59AW/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "Dexter",
				image: Dexter,
				backgroundGuide:
					"https://drive.google.com/file/d/161aLjrL21OZP0-T5cpDD9v4D-xzQZhTm/view?usp=sharing",
				width: 800,
				height: 800,
			},
			{
				name: "Vigilante Enforcement Division",
				image: Vigilante,
				backgroundGuide:
					"https://drive.google.com/file/d/1UhvSbBXiCJ84RAndHjBTFC5ASYRYi9-q/view?usp=sharing",
				width: 800,
				height: 800,
			},
		],
	},
	{
		name: "Junior Councils",
		councils: [
			{
				name: "World Health Organization (WHO)",
				image: Who,
				backgroundGuide:
					"https://drive.google.com/file/d/1qYlSP6ikvtxQgY46TQ_DuUAnttCkdYdd/view?usp=sharing",
				width: 800,
				height: 706,
			},
		],
	},
];
