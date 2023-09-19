type ColourTins = Record<number, string>;

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    custom: ColourTins;
  }

  interface PaletteOptions {
    custom: ColourTins;
  }
}

// SETUP COLORS
const PRIMARY = {
  light: "#5BE584",
  main: "#084B83",
  dark: "#007B55",
};
const SECONDARY = {
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
};

const CUSTOM = {
  100: "#2b3b54",
  200: "#242c38",
};

const palette = {
  primary: PRIMARY,
  secondary: SECONDARY,
  custom: CUSTOM,
} as const;

export default palette;
