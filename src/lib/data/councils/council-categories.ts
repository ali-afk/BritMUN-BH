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
				backgroundGuide:
					"https://drive.google.com/file/d/1ee-S6c03bGHKEwnpnak5Xwj7V7ro1Se5/view?usp=sharing",
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: Unodc,
				backgroundGuide:
					"https://drive.google.com/file/d/16hPcc99DiJDj0CD5eBUKezL-DfDGfm8C/view?usp=sharing",
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: Ecofin,
				backgroundGuide:
					"https://drive.google.com/file/d/1OiyxhT6J600xAg-BrPzaPtJ2SYnZZ9gd/view?usp=sharing",
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: Unesco,
				backgroundGuide:
					"https://drive.google.com/file/d/1q2IGk9lO9FXc9AtGtgTJtoMqoHmiRQVJ/view?usp=sharing",
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: Uncsw,
				backgroundGuide:
					"https://drive.google.com/file/d/1Y_1ael_FWf9dUaXZuahlNeLAV6KER2Ae/view?usp=sharing",
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: Disec,
				backgroundGuide:
					"https://drive.google.com/file/d/1udG0mCDd5OsPgzlpxZ7QzXs1XB9J5VsT/view?usp=sharing",
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "United Nations Security Council (UNSC)",
				image: Unsc,
				backgroundGuide:
					"https://drive.google.com/file/d/1kpWHCOdL3YjC937ibzLdg6fPlP94RW7Y/view?usp=sharing",
			},
			{
				name: "Grey's Anatomy",
				image: Greysanatomy,
				backgroundGuide:
					"https://drive.google.com/file/d/1SQYb_7PWYqum17LNjHCnttOUUe2Wgm7F/view?usp=sharing",
			},
			{
				name: "Legally Blonde",
				image: Legallyblonde,
				backgroundGuide:
					"https://drive.google.com/file/d/1C6tIT0jhAysAWGlo5TQmCzxF5bIyQFDp/view?usp=sharing",
			},
			{
				name: "J.P. Morgan",
				image: Jpmorgan,
				backgroundGuide:
					"https://drive.google.com/file/d/1KiEjksJbgcAWxmWssqmlP3piOLSgOGfu/view?usp=sharing",
			},
			{
				name: "International Sports Regulation Committee",
				image: Sports,
				backgroundGuide:
					"https://drive.google.com/file/d/1XY7MobDGXa2XWpv-EyyCa-5p2W7dptDC/view?usp=sharing",
			},
			{
				name: "Confederación De Psicología",
				image: Psicologia,
				backgroundGuide:
					"https://drive.google.com/file/d/1182O1T8x8IMlmNiU7CkGbD11OQfN_nPY/view?usp=sharing",
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: Iaea,
				backgroundGuide:
					"https://drive.google.com/file/d/1PVlR3rJHJi4Ybb01vxWDsBgw-yZlkJ7e/view?usp=sharing",
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
				backgroundGuide:
					"https://drive.google.com/file/d/161aLjrL21OZP0-T5cpDD9v4D-xzQZhTm/view?usp=sharing",
			},
			{
				name: "Vigilante Enforcement Division",
				image: Vigilante,
				backgroundGuide:
					"https://drive.google.com/file/d/1UhvSbBXiCJ84RAndHjBTFC5ASYRYi9-q/view?usp=sharing",
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
					"https://drive.google.com/file/d/1KseE3HEiak0EV_ElBnUeOOn_CyhXGGmB/view?usp=sharing",
			},
		],
	},

];
