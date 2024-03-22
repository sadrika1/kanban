import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styled/globalstyles.js";
import { UserProvider } from "./contexts/usercontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <GlobalStyle />
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
