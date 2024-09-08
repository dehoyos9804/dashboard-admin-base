import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider as ShadcnThemeProvider } from "./components/ui/theme-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import router from "./router";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ShadcnThemeProvider defaultTheme="dark">
            <RouterProvider router={router} />
          </ShadcnThemeProvider>
        </ThemeProvider>
      </I18nextProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
