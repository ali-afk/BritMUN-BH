import type { CouncilCategory } from "$types/component-props";
import { CouncilImages } from "./images";

export const councilCategories: CouncilCategory[] = [
	{
		name: "General Assembly",
		councils: [
			{
				name: "United Nations Security Council (UNSC)",
				image: CouncilImages.Unsc,
				backgroundGuide:
					"https://drive.google.com/file/d/1g_TqqgWMifs7Wo8J0hvh0Juj3hXg-ABe/view?usp=sharing",
			},
			{
				name: "United Nations International Children's Emergency Fund (UNICEF)",
				image: CouncilImages.Unicef,
				backgroundGuide:
					"https://drive.google.com/file/d/1ee-S6c03bGHKEwnpnak5Xwj7V7ro1Se5/view?usp=sharing",
			},
			{
				name: "United Nations Office on Drugs & Crime (UNODC)",
				image: CouncilImages.Unodc,
				backgroundGuide:
					"https://drive.google.com/file/d/16hPcc99DiJDj0CD5eBUKezL-DfDGfm8C/view?usp=sharing",
			},
			{
				name: "Economic and Financial Committee (ECOFIN)",
				image: CouncilImages.Ecofin,
				backgroundGuide:
					"https://drive.google.com/file/d/1NR7_3CMCC-nAigkRI5SKP4MBjx5-we_C/view?usp=sharing",
			},
			{
				name: "United Nations Educational, Scientific and Cultural Organization (UNESCO)",
				image: CouncilImages.Unesco,
				backgroundGuide:
					"https://drive.google.com/file/d/1q2IGk9lO9FXc9AtGtgTJtoMqoHmiRQVJ/view?usp=sharing",
			},
			{
				name: "United Nations Commission on the Status of Women (UNCSW)",
				image: CouncilImages.Uncsw,
				backgroundGuide:
					"https://drive.google.com/file/d/1Y_1ael_FWf9dUaXZuahlNeLAV6KER2Ae/view?usp=sharing",
			},
			{
				name: "Disarmament and International Security Committee (DISEC)",
				image: CouncilImages.Disec,
				backgroundGuide:
					"https://drive.google.com/file/d/1vRAKXSwlUqQ5bDa4G-CKEWFSbQ2tZ4NT/view?usp=sharing",
			},
		],
	},
	{
		name: "Specialised Councils",
		councils: [
			{
				name: "Grey's Anatomy",
				image: CouncilImages.GreysAnatomy,
				backgroundGuide:
					"https://drive.google.com/file/d/1SQYb_7PWYqum17LNjHCnttOUUe2Wgm7F/view?usp=sharing",
			},
			{
				name: "Legally Blonde",
				image: CouncilImages.LegallyBlonde,
				backgroundGuide:
					"https://drive.google.com/file/d/1C6tIT0jhAysAWGlo5TQmCzxF5bIyQFDp/view?usp=sharing",
			},
			{
				name: "J.P. Morgan",
				image: CouncilImages.JpMorgan,
				backgroundGuide:
					"https://drive.google.com/file/d/1KiEjksJbgcAWxmWssqmlP3piOLSgOGfu/view?usp=sharing",
			},
			{
				name: "International Sports Regulation Committee",
				image: CouncilImages.Sports,
				backgroundGuide:
					"https://drive.google.com/file/d/1XY7MobDGXa2XWpv-EyyCa-5p2W7dptDC/view?usp=sharing",
			},
			{
				name: "Confederación De Psicología",
				image: CouncilImages.Psicologia,
				backgroundGuide:
					"https://drive.google.com/file/d/1nSU_Vovee_y5mEKFKMsTalVaHbTQz2k4/view?usp=sharing",
			},
			{
				name: "International Atomic Energy Agency (IAEA)",
				image: CouncilImages.Iaea,
				backgroundGuide:
					"https://drive.google.com/file/d/15bFaDAjEHhm8HGZAAIpdjBERPC9l3XlY/view?usp=drive_link",
			},
		],
	},
	{
		name: "Crisis Councils",
		councils: [
			{
				name: "Jumanji",
				image: CouncilImages.Jumanji,
				backgroundGuide:
					"https://drive.google.com/file/d/10SwQMEieTuMKA6IXluUhED_OQFbGJlFO/view?usp=sharing",
			},
			{
				name: "Fantasy",
				image: CouncilImages.Fantasy,
				backgroundGuide:
					"https://drive.google.com/file/d/1420ZbBpbL0LlUpKZxFk6Ki8pSxxZ59AW/view?usp=sharing",
			},
			{
				name: "Dexter",
				image: CouncilImages.Dexter,
				backgroundGuide:
					"https://drive.google.com/file/d/161aLjrL21OZP0-T5cpDD9v4D-xzQZhTm/view?usp=sharing",
			},
			{
				name: "Vigilante Enforcement Division",
				image: CouncilImages.Vigilante,
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
				image: CouncilImages.Who,
				backgroundGuide:
					"https://drive.google.com/file/d/1qYlSP6ikvtxQgY46TQ_DuUAnttCkdYdd/view?usp=sharing",
			},
		],
	},
];
