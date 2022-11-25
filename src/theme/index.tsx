import {ReactNode} from 'react';
// @mui
import {CssBaseline} from '@mui/material';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';

type Props = {
  children: ReactNode;
};

export default function ThemeProvider({children}: Props) {

  const theme = createTheme();

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}