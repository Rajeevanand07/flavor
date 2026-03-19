import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import RecipeContextProvider from "./context/RecipeContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <RecipeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeContextProvider>,
);
