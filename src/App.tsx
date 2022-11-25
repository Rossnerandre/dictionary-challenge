import ThemeProvider from './theme';
import {Typography} from "@mui/material";

export default function App() {
  return (
    <ThemeProvider>
      <Typography variant="h3">Dictionary Challenge</Typography>
    </ThemeProvider>
  );
}

