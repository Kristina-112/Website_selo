import {createContext, useState, useEffect} from 'react';

import logo from '../assets/icons-static/logo.png';

// theme dependent
import sun from '../assets/icons-theme-dependent/sun.png';
import moon from '../assets/icons-theme-dependent/moon.png';
import arrow_w from '../assets/icons-theme-dependent/arrow-white.png';
import arrow_b from '../assets/icons-theme-dependent/arrow-black.png';
import download_w from '../assets/icons-theme-dependent/download-white.png';
import download_b from '../assets/icons-theme-dependent/download-black.png';

// icons
import plant from '../assets/about/plant.png';
import check from '../assets/icons-static/check.png';
import car from '../assets/about/car.png';
import train from '../assets/about/train.png';
import file from '../assets/icons-static/file.png';
import more from '../assets/icons-static/more.png';

// about page images
import bg_home from '../assets/about/bg-home.png';
import house_field from '../assets/about/house-field.png';
import forest from '../assets/about/forest.png';
import house2 from '../assets/about/house.jpg';
import timber1 from '../assets/about/timber1.png';
import timber2 from '../assets/about/timber2.png';
import log1 from '../assets/about/log1.jpg';
import log2 from '../assets/about/log2.jpg';
import log3 from '../assets/about/log3.jpg';
import finish1 from '../assets/about/finish1.jpg';
import finish2 from '../assets/about/finish2.jpg';

// house plans images
import galich76 from '../assets/house-plans/galich76.jpg';
import kd001 from '../assets/house-plans/kd001.jpg';
import kd003 from '../assets/house-plans/kd003.jpg';
import kostroma53 from '../assets/house-plans/kostroma53.jpg';
import moskva51 from '../assets/house-plans/moskva51.jpg';
import noginsk57 from '../assets/house-plans/noginsk57.jpg';
import rublevka59 from '../assets/house-plans/rublevka59.jpg';
import zodchiy61 from '../assets/house-plans/zodchiy61.jpg';

export const images = {
    static: {
        logo: logo,

        plant: plant,
        check: check,
        car: car,
        train: train,
        file: file,
        more: more,

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

        galich76: galich76,
        kd001: kd001,
        kd003: kd003,
        kostroma53: kostroma53,
        moskva51: moskva51,
        noginsk57: noginsk57,
        rublevka59: rublevka59,
        zodchiy61: zodchiy61
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
