import React, { useContext, useState } from 'react';

// Sets up Context Theme for styles use state
const ThemeContext = React.createContext()

// Sets up Context Theme for toggle function so it can be used by other buttons
const ThemeUpdateContext = React.createContext();

// Custom Hooks that handles the above contexts here, instead of within the functional components
export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

// Context component that has all the logic that other components will use
export function ThemeProvider({ children }) {

    // Sets state for dark Theme
    const [darkTheme, setDarkTheme] = useState(true);

    // Function to toggle the theme from true to false if true
    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme);
    }

    return (
        // Wraps other components that need to use it's props logic
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={{toggleTheme, login, logout, user}}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )

}