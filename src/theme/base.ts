import type { ThemeOptions } from "@mui/material";
import { fontFamily } from "fonts";

const breakpoints: ThemeOptions["breakpoints"] = {
  keys: ["xs", "sm", "md", "lg", "xl"],
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1350,
    xl: 1536,
  },
  unit: "px",
};

const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: () => ({
      "html, body, #__next": {
        height: "100%",
      },
      "::placeholder": { color: "#5A5D6C !important", opacity: 1 },
      "::-webkit-scrollbar": {
        width: 10,
      },
      "::-webkit-scrollbar-track": {
        width: 10,
        backgroundColor: "#0000000",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "10px",
        backgroundColor: "#dddddd",
      },
    }),
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        ".MuiInputBase-root": {
          "::before, ::after": {
            borderBottomColor: "#E4E2E4 !important",
            borderBottomWidth: "1px !important",
          },
        },
      },
    },
  },
};

const typography: ThemeOptions["typography"] = {
  fontFamily,
};

export const baseTheme: ThemeOptions = {
  components,
  typography,
  breakpoints,
};
