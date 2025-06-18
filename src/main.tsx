import { createRoot } from "react-dom/client";
import "the-new-css-reset/css/reset.css";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "context/AuthContext.tsx";
import { ThemeContextProvider } from "context/ThemeContext.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeContextProvider>
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </ThemeContextProvider>
);
