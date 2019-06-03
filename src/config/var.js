import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    mint: {
      light: '#ff7961',
      main: '#41c191',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  spacing: `1em`
});

const colors = {
  dark_blue: "#232f34",

  white_grey: "#f4f4f4",
  blue: "#4990e2",
  grey: "#7a8384",
  light_blue: "#d0d0f5",
  dark_grey: "#1d2127",
  white: "#fefefe",
  yellow: "#3f56b5",
  red: "#FA5562",
  black: "#0b0b0b"
};
export { theme, colors };
