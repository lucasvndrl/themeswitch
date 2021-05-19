import { createContext , useState, useContext } from 'react'

const ThemeContext = createContext()

export const themes = {
    light: {
        colors: {
            back: '#333',
            text: '#EEE',
        }
    },
    dark: {
        colors: {
            back: '#EEE',
            text: '#333',
        }
    }
}

export default function ThemeProvider ({children}) {
    const [theme, setTheme] = useState(themes.light);

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext);
    
    const { theme, setTheme } = context;
    return ({theme, setTheme});
}