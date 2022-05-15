import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <ThemeContext.Provider value={{ switchValue, setSwitchValue }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
