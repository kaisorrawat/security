import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Themes from "./themes01";

ReactDOM.render(
  // <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={Themes.default} >
        <HashRouter>
          <CssBaseline />
          <App />
        </HashRouter>
      </ThemeProvider>
    </HelmetProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
