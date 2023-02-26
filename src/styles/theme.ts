import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import { Roboto } from "@next/font/google";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});
// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: blueGrey,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

export default theme;
