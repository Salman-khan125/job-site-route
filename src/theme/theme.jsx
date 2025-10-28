import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
     primary: {
      main: "#007F94",      // your Figma color
      light: "#33AABD",     // slightly lighter shade
      dark: "#005F70",      // slightly darker shade
      contrastText: "#FFFFFF",
     },
    secondary: { main: "#6366F1", light: "#A5B4FC", dark: "#312E81" },
    success: { main: "#22C55E" },
    error: { main: "#EF4444" },
    warning: { main: "#F59E0B" },
    background: { default: "#F9FAFB", paper: "#FFFFFF" },
    text: { primary: "#111827", secondary: "#4B5563" },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    body1: { fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 500 },
  },
});

export default theme;
