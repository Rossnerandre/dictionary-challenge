import ThemeProvider from './theme';
import Router from "./routes";

export default function App() {
  return (
    <ThemeProvider>
      <Router/>
    </ThemeProvider>
  );
}

