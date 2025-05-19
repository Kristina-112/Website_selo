import {createContext, useState, useEffect} from 'react';

import logo from '../assets/house.png';

import sun from '../assets/sun.png';
import moon from '../assets/moon.png';
import arrow_w from '../assets/arrow-white.png';
import arrow_b from '../assets/arrow-black.png';
import download_w from '../assets/download-white.png';
import download_b from '../assets/download-black.png';

import plant from '../assets/home/plant.png';
import check from '../assets/home/check.png';
import car from '../assets/home/car.png';
import train from '../assets/home/train.png';
import file from '../assets/file.png';

import bg_home from '../assets/home/bg-home.png';
import house_field from '../assets/home/house-field.png';
import forest from '../assets/home/forest.png';
import house2 from '../assets/home/house2.jpg';
import timber1 from '../assets/home/timber1.png';
import timber2 from '../assets/home/timber2.png';
import log1 from '../assets/home/log1.jpg';
import log2 from '../assets/home/log2.jpg';
import log3 from '../assets/home/log3.jpg';
import finish1 from '../assets/home/finish1.jpg';
import finish2 from '../assets/home/finish2.jpg';

export const images = {
    static: {
        logo: logo,

        plant: plant,
        check: check,
        car: car,
        train: train,
        file: file,

        bg_home: bg_home,
        house_field: house_field,
        forest: forest,
        house2: house2,
        timber1: timber1,
        timber2: timber2,
        log1: log1,
        log2: log2,
        log3: log3,
        finish1: finish1,
        finish2: finish2,
    },

    light: {
        theme: moon,
        arrow: arrow_b,
        download: download_b,
    },

    dark: {
        theme: sun,
        arrow: arrow_w,
        download: download_w,
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
