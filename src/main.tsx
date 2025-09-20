import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import "./config/i18n.ts";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);
