import {createContext, useState, useEffect} from 'react';

import logo from '../assets/house.png';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import plant from '../assets/plant.png';

// import info from '../assets/info.png';
// import projects from '../assets/projects.png';
// import plan from '../assets/plan.png';
// import gallery from '../assets/gallery.png';
// import contacts from '../assets/contacts.png';
// import road from '../assets/road.png';
// import documents from '../assets/documents.png';

import bg from '../assets/bg.png';
import house1 from '../assets/gallery/house1.png';
import happy from '../assets/gallery/happy.png';

export const images = {
    static: {
        logo: logo,
        plant: plant,
        // info: info,
        // projects: projects,
        // plan: plan,
        // gallery: gallery,
        // contacts: contacts,
        // road: road,
        // documents: documents,
        bg: bg,
        house1: house1,
        happy: happy,
    },

    light: {
        theme: moon,
    },

    dark: {
        theme: sun,
    },
}

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {

    const getTheme = () => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) return savedTheme;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);


    const handleThemeChange = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        console.log(newTheme);
    };

    return (
        <ThemeContext.Provider value={{theme, handleThemeChange}}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};
