'use client'

import React, { useContext, useState, createContext, useEffect } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

// Create a context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export function ThemeProvider({ children }: { children: React.ReactNode }) {

  const [mode, setMode] = useState("");


  const handleThemeChange = () => {
    if (localStorage.theme === "dark"  || 
      (!("theme" in localStorage) 
      && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      // explain, is it putting css on body ?
      document.documentElement.classList.add("dark");
    } else {
        setMode("light");
        document.documentElement.classList.remove("dark");
  
    }}

    useEffect(() => {
      handleThemeChange();
    }, [mode]);

    // console.log('local', localStorage)

    return (
      <ThemeContext.Provider value={{ mode, setMode }}>
        {children}
      </ThemeContext.Provider>
    );
  ;

}


export function useTheme() {
    const context = useContext(ThemeContext);
  
    if (context === undefined) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
  
    return context;
  }
  
