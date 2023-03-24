import {
  createBox,
  createText,
  createTheme,
  ResponsiveValue,
} from "@shopify/restyle";

const theme = createTheme({
  colors: {
    primary: "#2CB9B0",
    primaryLight: "#E7F9F7",
    secondary: "#0C0D43",
    body: "rgba(12, 13, 52, 0.7)",
    white: "#FFFFFF",
    grey: "rgba(12, 13, 52, 0.05)",
    slideGrey: "#F2F2F2",
    button: "#0C0D34",
    danger: "red",
    borderGray: "#8A8D90",
    black: "#000000",
    yellow: "#FFC641",
    orange: "#FE5E33",
    violet: "#442CB9",
    pink: "#FF87A2",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    none: 0,
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: "SFProText-Bold",
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "SFProText-Regular",
      color: "body",
    },
    button: {
      fontSize: 15,
      fontFamily: "SFProText-Regular",
      color: "button",
    },
    defaults: {},
    header: {
      fontSize: 12,
      lineHeight: 24,
      fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
  },
});

export type Theme = typeof theme;

export const Box = createBox<Theme>();
export const Position = {
  absoluteFillObject: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  } as {
    position: ResponsiveValue<"absolute" | "relative" | undefined, undefined>;
  },
};
export const Text = createText<Theme>();

export default theme;
