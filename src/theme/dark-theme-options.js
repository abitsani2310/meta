// Colors

const neutral = {
  100: "#000000",
  200: "#323032",
  // 300: "#323232",
  300: "#271127",
  400: "#AF9CAD",
  500: "#CAC5CA",
  600: "#FAF0F9",
  700: "#F4F0F3",
  800: "#371F31",
  900: "#27111F",
  1000: "#FFFFFF",
  1100: "#D6D6D6",
};
const moduleTheme = {
  pharmacy: "#F531B4",
  ecommerce: "#FFEEF9",
  food: "#EF22AB",
  parcel: "#EFD7E9",
};

const background = {
  default: "#190B14",
  paper: neutral[900],
  custom: "#292829",
  custom2: "#371F2F",
  custom3: neutral[800],
  custom4: "#000000",
  footer1: "#371F2F",
  footer2: "#371F2F",
  custom5: "#292829",
  custom6: "rgba(255, 255, 255, 0.05)",
  custom7: "#000000",
};
const horizontalCardBG = neutral[900];
const divider = "#482D40";
const foodCardColor = neutral[800];
const roundStackOne = "rgba(255, 255, 255, 0.04)";
const roundStackTwo = "rgba(255, 255, 255, 0.06)";
const primary = {
  main: "#9D036A",
  light: "#EF90C9",
  dark: "#661C53",
  deep: "#600241",
  contrastText: neutral[900],
  semiLight: "#FFE4F7",
  overLay: "#000000",
  customType2: "#B73B8A",
  lite: "rgba(3, 157, 85, 0.1)",
  customType3: "#CE0091",
  icon: "#ffffff",
};

const secondary = {
  main: "#B91087",
  light: "#C73F9A",
  dark: "#810B45",
  contrastText: neutral[900],
};

const success = {
  main: "#B81488",
  light: "#C643A4",
  dark: "#800E56",
  contrastText: neutral[900],
};

const info = {
  main: "#F321C4",
  light: "#F764D6",
  dark: "#D00B8F",
  lite: "#FFDBF4",
  contrastText: neutral[900],
  contrastText1: "#F8F5F7",
  blue: "#FD0D9D",
  custom1: "#F53199",
};

const warning = {
  main: "#FF20CD",
  light: "#FFBF4C",
  dark: "#B21674",
  lite: "#FF8BD1",
  liter: "#FFF2FA",
  contrastText: neutral[900],
  new: "#FF17A2",
};

const error = {
  main: "#D1438E",
  light: "#DA68A8",
  dark: "#922E6A",
  contrastText: neutral[900],
  deepLight: "#FF5EE6",
};

const text = {
  primary: "#e8eaec",
  secondary: "#C0A0B2",
  disabled: "rgba(255, 255, 255, 0.48)",
  custom: "#ede8e8",
  customText1: "#F7EDF5",
};
const footer = {
  inputButton: "#FFBBE6",
  inputButtonHover: "#906780",
  bottom: "rgba(0, 98, 52, 0.3)",
  foodBottom: "#786870",
  appDownloadButtonBg: "#1A1A1A",
  appDownloadButtonBgGray: "#593E49",
  foodFooterBg: "#414141",
};
const customColor = {
  textGray: "#9c9c9c",
  textGrayDeep: "#787676",
  buyButton: "#F991E2",
  parcelWallet: "#FD3FAA",
};
const whiteContainer = {
  main: "#ffffff",
};
const pink = {
  main: "#FF6DD4",
};
const toolTipColor = "#90888E";
const paperBoxShadow = "#F1E5ED";
export const darkThemeOptions = {
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
            backgroundColor: neutral[800],
            "& .MuiChip-deleteIcon": {
              color: neutral[500],
            },
          },
          "&.MuiChip-outlinedDefault": {
            borderColor: neutral[700],
            "& .MuiChip-deleteIcon": {
              color: neutral[700],
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
            "-webkit-box-shadow": "0 0 0 100px #282929 inset",
            "-webkit-text-fill-color": "#fff",
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
          color: neutral[100],
        },
        track: {
          backgroundColor: neutral[500],
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
          backgroundColor: neutral[800],
          ".MuiTableCell-root": {
            color: neutral[300],
          },
        },
      },
    },
  },
  palette: {
    action: {
      active: neutral[400],
      hover: "rgba(255, 255, 255, 0.04)",
      selected: "rgba(255, 255, 255, 0.08)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabled: "rgba(255, 255, 255, 0.26)",
    },
    horizontalCardBG,
    background,
    divider,
    error,
    info,
    mode: "dark",
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
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 2px rgba(0, 0, 0, 0.24)",
    "0px 1px 4px rgba(0, 0, 0, 0.24)",
    "0px 1px 5px rgba(0, 0, 0, 0.24)",
    "0px 1px 6px rgba(0, 0, 0, 0.24)",
    "0px 2px 6px rgba(0, 0, 0, 0.24)",
    "0px 3px 6px rgba(0, 0, 0, 0.24)",
    "0px 4px 6px rgba(0, 0, 0, 0.24)",
    "0px 5px 12px rgba(0, 0, 0, 0.24)",
    "0px 5px 14px rgba(0, 0, 0, 0.24)",
    "0px 5px 15px rgba(0, 0, 0, 0.24)",
    "0px 6px 15px rgba(0, 0, 0, 0.24)",
    "0px 7px 15px rgba(0, 0, 0, 0.24)",
    "0px 8px 15px rgba(255, 255, 255, 0.07)",
    "0px 9px 15px rgba(0, 0, 0, 0.24)",
    "0px 10px 15px rgba(0, 0, 0, 0.24)",
    "0px 12px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 13px 22px -8px rgba(0, 0, 0, 0.24)",
    "0px 14px 24px -8px rgba(0, 0, 0, 0.24)",
    "0px 20px 25px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
    "0px 25px 50px rgba(0, 0, 0, 0.24)",
  ],
};
