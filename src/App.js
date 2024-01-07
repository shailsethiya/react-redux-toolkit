import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { ThemeContext } from "./context/Theme.context";
import BaseRoutes from "./routes/routes";
import { darkTheme, lightTheme } from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

function App() {
  const { theme, THEMES } = useContext(ThemeContext);
  const selectedTheme = theme === THEMES.LIGHT ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      <BaseRoutes />
      <ToastContainer position="top-right" />
    </ThemeProvider>
  );
}

export default App;
