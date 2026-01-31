export type LoadPriority = "high" | "low";

export interface FaqData {
	question: string;
	answer: string;
}

export interface TestimonialData {
	title: string;
	year: string;
	comment: string;
}

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

export type DocumentLink = {
	label: string;
	href: string;
};

export type DocumentGroup = {
	links: DocumentLink[];
};
