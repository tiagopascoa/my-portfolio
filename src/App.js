import React from "react";
import "./App.css";
//Components
import Home from "./pages/Home";
//Context
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default App;
