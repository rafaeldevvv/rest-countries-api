const { createContext, useContext } = React;

export const ThemeContext = createContext("dark");

export function useTheme() {
   return useContext(ThemeContext);
}

// console.log(React);
