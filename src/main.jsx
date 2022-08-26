import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyled from "./styles/styles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyled />
  </React.StrictMode>
);
