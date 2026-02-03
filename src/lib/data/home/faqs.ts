import { SiteProperties } from "$data/shared";
import type { FaqData } from "$types/component-props";

export const faqs: FaqData[] = [
	{
		question: `Do I need to have MUN experiences to apply for BritMUN ${SiteProperties.britmunYear.roman}?`,
		answer: `Experience is only needed to apply for <b>chair</b> positions (Preferably 2 MUN Experiences). It is also needed for delegates applying for <b>crisis councils</b>. All other positions such as Press, Runner, Security, and Delegate (excluding Crisis Councils) do not require MUN experiences.`,
	},
	{
		question: `Can I apply for BritMUN ${SiteProperties.britmunYear.roman} if I do not attend the British School of Bahrain?`,
		answer: `BritMUN ${SiteProperties.britmunYear.roman} is open to all students from Year 8 (Grade 7) to Year 13 (Grade 12) from all schools in Bahrain and the Kingdom of Saudi Arabia. <b>Security applications</b> are however only opened for students of the British School of Bahrain.`,
	},
	{
		question: `What councils are there at BritMUN ${SiteProperties.britmunYear.roman}?`,
		answer: `Check out the "<a href='/councils'>Councils</a>" Page on our website to find out more about councils!`,
	},
	{
		question: `Is there an entry fee for BritMUN ${SiteProperties.britmunYear.roman}?`,
		answer: `Registration for the conference includes a payment of ${SiteProperties.entryFee} which covers all the resources necessary for the two-day conference, council break snacks, lunch break food stalls and refreshments, a photo booth, and more.`,
	},
	{
		question: `Do I need to bring money with me to BritMUN ${SiteProperties.britmunYear.roman}?`,
		answer: `You do not need to bring any money with you during the weekend as all the provided items are included in the entry fee.`,
	},
	{
		question: "When will I find out my allocations?",
		answer: `Allocations will be released closer to the conference date. To stay notified, follow our social media platforms: <a href="${SiteProperties.contact.instagram}">Instagram</a> and <a href="${SiteProperties.contact.tiktok}">Tiktok</a>.`,
	},
	{
		question: "Are there any resources to support delegates?",
		answer: `The BritMUN team has prepared a resources pack that guides delegates with all the details necessary for BritMUN ${SiteProperties.britmunYear.roman}. Moreover, there will be a training session held for those who wish to attend. Further details will be provided closer to the date of the conference.`,
	},
];
