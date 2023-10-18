import { createContext, useContext, useState } from "react";

interface ThemeContextType {
  open: string;
  setOpen: (open: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


const ThemePro = ({ children }: undefined) => {
  const [open, setOpen] = useState<string>(""); // Provide an initial string value here

  return (
    <ThemeContext.Provider value={{ open, setOpen }}>
      {children}
    </ThemeContext.Provider>
  );
};


const useTheme = ()=>{
    const result = useContext(ThemeContext)

    return(
        result
    )
}