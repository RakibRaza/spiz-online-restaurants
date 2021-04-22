import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fff",
    },
    primary: {
      main: "#ffbe00",
    },
    secondary: {
      main: "#0b0320",
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h2: {
      fontFamily: "'Playfair Display', serif",
    },
    h3: {
      fontFamily: "'Playfair Display', serif",
    },
    h4: {
      fontFamily: "'Playfair Display', serif",
    },
    h5: {
      fontFamily: "'Playfair Display', serif",
    },
    h6: {
      fontFamily: "'Playfair Display', serif",
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: "#ffbe00",
        padding: "12px 35px 11px",
        borderRadius: "50px",
        color: "#0b0320",
        textTransform: "capitalize",
        fontSize: "15px",
        "&:hover": {
          backgroundColor: "#0b0320",
          color: "#fff",
        },
      },
    },
    MuiInputBase: {
      root: {
        backgroundColor: "#fff",
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: "60px",
        padding: "6px 20px",
      },
    },
  },
});
