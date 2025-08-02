// Colors

const neutral = {
	90: "#F1E5EB",
	100: "#FFFFFF",
	200: "#EBE5E9",
	300: "#F6F7FB",
	400: "#AF9CAA",
	500: "#806B7A",
	600: "#634B5D",
	700: "#51374A",
	800: "#371F30",
	900: "#271123",
	1000: "#2E212B",
	1100: "#D6D6D6",
};

const background = {
	default: "#FCF9FB",
	paper: "#FFFFFF",
	custom: "#F5F1F4",
	custom2: "#FFFFFF",
	custom3: "#FBF6FA",
	custom4: "#ffffff",
	footer1: "#FBF6F9",
	footer2: "#FBF6F8",
	custom5: "#FBF6F6",
	custom6: "#FDFCFD",
	custom7: "#F6F6F6",
};

const divider = "#F0E6EC";

const primary = {
	main: "#a3007a",
	deep: "#C90081",
	light: "#FDEBF7",
	dark: "#661C46",
	semiLight: "#FFE4F4",
	contrastText: "#FFFFFF",
	customType1: "#CB0D8C",
	customType2: "#B73B8E",
	customType3: "#CE0083",
	overLay: "#000000",
	lite: "rgba(3, 157, 85, 0.1)",
	icon: "#9D0370",
};
const moduleTheme = {
	pharmacy: "#9D035F",
	ecommerce: "#9D035F",
	food: "#9D035F",
	parcel: "#9D035F",
};
const horizontalCardBG = "#FFE4F3";

const secondary = {
	main: "#B91087",
	light: "#C73FA8",
	dark: "#810B5A",
	contrastText: "#FFFFFF",
};

const success = {
	main: "#B81488",
	light: "#C64396",
	dark: "#800E56",
	contrastText: "#FFFFFF",
};

const info = {
	main: "#F321BC",
	light: "#F764C6",
	dark: "#D00B6C",
	lite: "#FFDBFC",
	contrastText: "#FFFFFF",
	contrastText1: "#F5F6F8",
	blue: "#FD0D9D",
	custom1: "#F531AD",
};

const warning = {
	main: "#FF2040",
	light: "#FFD5DF",
	lite: "#FF8B9C",
	liter: "#FFF2F5",
	dark: "#FE1C64",
	contrastText: "#FFFFFF",
	new: "#FF1769",
};

const error = {
	main: "#D14384",
	light: "#DA68AC",
	dark: "#922E55",
	contrastText: "#FFFFFF",
	deepLight: "#FF5E97",
};

const text = {
	primary: "#593E4D",
	secondary: "#AE93A4",
	disabled: "rgba(55, 65, 81, 0.48)",
	custom: "#3F3F3F",
	customText1: "#634B59",
};

const footer = {
	inputButton: "#FFBBE6",
	inputButtonHover: "#CF6D97",
	bottom: "rgba(0, 98, 52, 0.3)",
	foodBottom: "#CF6D97",
	appDownloadButtonBg: "#1A1A1A",
	appDownloadButtonBgGray: "#593E4C",
	appDownloadButtonBgHover: "#4f4f4f",
	foodFooterBg: "#414141",
};
const customColor = {
	textGray: "#9c9c9c",
	textGrayDeep: "#787676",
	buyButton: "#F991ED",
	parcelWallet: "#FD3F46",
};
const whiteContainer = {
	main: "#ffffff",
};
const pink = {
	main: "#FF8B6D",
};
const foodCardColor = "#FFEFF2";
const paperBoxShadow = "#F1E5EA";
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";
const toolTipColor = neutral[1000];

export const lightThemeOptions = {
	components: {
		MuiAvatar: {
			styleOverrides: {
				root: {
					backgroundColor: neutral[500],
					color: "#FFFFFF",
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					"&.MuiChip-filledDefault": {
						backgroundColor: neutral[200],
						"& .MuiChip-deleteIcon": {
							color: neutral[400],
						},
					},
					"&.MuiChip-outlinedDefault": {
						"& .MuiChip-deleteIcon": {
							color: neutral[300],
						},
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					"&::placeholder": {
						opacity: 1,
						color: text.secondary,
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				notchedOutline: {
					borderColor: divider,
				},
				input: {
					"&:-webkit-autofill": {
						"-webkit-box-shadow": "0 0 0 100px #f0f5f5 inset",
						"-webkit-text-fill-color": "#000",
					},
				},
			},
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: "solid",
					borderWidth: 1,
				},
			},
		},
		MuiPopover: {
			styleOverrides: {
				paper: {
					borderColor: divider,
					borderStyle: "solid",
					borderWidth: 1,
				},
			},
		},
		MuiSwitch: {
			styleOverrides: {
				switchBase: {
					color: neutral[500],
				},
				track: {
					backgroundColor: neutral[400],
					opacity: 1,
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderBottom: `1px solid ${divider}`,
				},
			},
		},
		MuiTableHead: {
			styleOverrides: {
				root: {
					backgroundColor: neutral[100],
					".MuiTableCell-root": {
						color: neutral[700],
					},
				},
			},
		},
	},
	palette: {
		action: {
			active: neutral[500],
			focus: "rgba(55, 65, 81, 0.12)",
			hover: "rgba(55, 65, 81, 0.04)",
			selected: "rgba(55, 65, 81, 0.08)",
			disabledBackground: "rgba(55, 65, 81, 0.12)",
			disabled: "rgba(55, 65, 81, 0.26)",
		},
		horizontalCardBG,
		background,
		divider,
		error,
		info,
		mode: "light",
		neutral,
		primary,
		secondary,
		success,
		text,
		warning,
		footer,
		customColor,
		whiteContainer,
		pink,
		paperBoxShadow,
		foodCardColor,
		moduleTheme,
		roundStackOne,
		roundStackTwo,
		toolTipColor,
	},
	shadows: [
		"none",
		"0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)",
		"0px 1px 2px rgba(100, 116, 139, 0.12)",
		"0px 1px 4px rgba(100, 116, 139, 0.12)",
		"0px 1px 5px rgba(100, 116, 139, 0.12)",
		"0px 1px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 6px rgba(100, 116, 139, 0.12)",
		"0px 3px 6px rgba(100, 116, 139, 0.12)",
		"0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)",
		"0px 5px 12px rgba(100, 116, 139, 0.12)",
		"0px 5px 14px rgba(100, 116, 139, 0.12)",
		"0px 5px 15px rgba(100, 116, 139, 0.12)",
		"0px 6px 15px rgba(100, 116, 139, 0.12)",
		"0px 7px 15px rgba(100, 116, 139, 0.12)",
		"0px 8px 15px rgba(100, 116, 139, 0.12)",
		"0px 9px 15px rgba(100, 116, 139, 0.12)",
		"0px 10px 15px rgba(100, 116, 139, 0.12)",
		"0px 12px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 13px 22px -8px rgba(100, 116, 139, 0.25)",
		"0px 14px 24px -8px rgba(100, 116, 139, 0.25)",
		"0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
		"0px 25px 50px rgba(100, 116, 139, 0.25)",
	],
};
