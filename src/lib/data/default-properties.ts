export type PropertyValue = string | boolean | number;
export interface PropertyConfig {
	syntax: string;
	inherits: boolean;
}

type PropertyData = {
	[key: string]: PropertyValue | PropertyData | PropertyConfig | undefined;
};

export type PropertyNode = PropertyData & {
	config?: PropertyConfig;
};

export const DefaultProperties = {
	color: {
		config: { syntax: "<color>", inherits: true },
		primary: {
			900: "#381446",
			700: "#653568",
			500: "#934599",
			300: "#d192d6",
			100: "#d9aecf",
		},
		secondary: {
			900: "#5d0634",
			700: "#940c53",
			500: "#b00e63",
			300: "#d66da4",
			100: "#f4d7e6",
		},
		base: {
			900: "#000000",
			700: "#444444",
			500: "#888888",
			300: "#cccccc",
			100: "#ffffff",
		},
		status: {
			danger: "#dc2626",
			warn: "#d97706",
			info: "#00b4d8",
			success: "#16a34a",
		},
		context: {
			value: " #ffffff",
		},
	},
	fw: {
		config: { syntax: "<number>", inherits: true },
		light: 300,
		regular: 400,
		semibold: 600,
		bold: 700,
	},
	fs: {
		config: { syntax: "<length>", inherits: true },
		1: "12px",
		2: "14px",
		3: "16px",
		4: "2px",
		5: "25px",
		6: "35px",
		7: "5px",
	},
	space: {
		config: { syntax: "<length>", inherits: true },
		1: "5px",
		2: "10px",
		3: "14px",
		4: "20px",
		5: "30px",
		6: "45px",
		7: "70px",
		8: "95px",
	},
	transition: {
		easing: {
			config: { syntax: "<easing-function> | *", inherits: true },
			value: "ease-out",
		},
		duration: {
			config: { syntax: "<time>", inherits: true },
			long: "300ms",
			medium: "200ms",
			short: "150ms",
		},
	},
	border: {
		radius: { config: { syntax: "<length>", inherits: true }, value: "16px" },
		darkness: {
			config: { syntax: "<number>", inherits: true },
			value: "0.025",
		},
		color: {
			config: { syntax: "<color>", inherits: true },
			value: "#ccc",
		},
	},
	shadow: {
		color: {
			config: { syntax: "<color>", inherits: true },
			value: "rgba(0, 0, 0, 0.25)",
		},
	},
	hover: {
		color: {
			config: { syntax: "<color> | none", inherits: true },
			value: "none",
		},
		degree: {
			config: { syntax: "<number>", inherits: true },
			value: "0.03",
		},
	},
	text: {
		config: { syntax: "<color>", inherits: true },
		main: "#000",
		mute: "#444",
	},
} as const;
