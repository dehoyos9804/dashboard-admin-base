import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as ShadcnThemeProvider } from "./components/ui/theme-provider";

import router from "./router";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ShadcnThemeProvider defaultTheme="dark">
          <RouterProvider router={router} />
        </ShadcnThemeProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
