import {createContext, useState, useEffect} from 'react';

// theme dependent
import sun from '../assets/icons-theme-dependent/sun.png';
import moon from '../assets/icons-theme-dependent/moon.png';
import arrow_w from '../assets/icons-theme-dependent/arrow-white.png';
import arrow_b from '../assets/icons-theme-dependent/arrow-black.png';
import download_w from '../assets/icons-theme-dependent/download-white.png';
import download_b from '../assets/icons-theme-dependent/download-black.png';
import phone_w from '../assets/icons-theme-dependent/phone-white.png';
import phone_b from '../assets/icons-theme-dependent/phone-black.png';
import email_w from '../assets/icons-theme-dependent/email-white.png';
import email_b from '../assets/icons-theme-dependent/email-black.png';
import delivery_w from '../assets/icons-theme-dependent/delivery-white.png';
import delivery_b from '../assets/icons-theme-dependent/delivery-black.png';
import unload_w from '../assets/icons-theme-dependent/unload-white.png';
import unload_b from '../assets/icons-theme-dependent/unload-black.png';
import assemble_w from '../assets/icons-theme-dependent/assemble-white.png';
import assemble_b from '../assets/icons-theme-dependent/assemble-black.png';
import moscow_w from '../assets/icons-theme-dependent/moscow-white.png';
import moscow_b from '../assets/icons-theme-dependent/moscow-black.png';

// icons
import logo from '../assets/icons-static/logo.png';
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

// houses
import galich76 from '../assets/house-plans/galich76.jpg';
import galich76_plan1 from '../assets/house-plans/galich76-plan1.jpg';
import galich76_plan2 from '../assets/house-plans/galich76-plan2.jpg';
import kd001 from '../assets/house-plans/kd001.jpg';
import kd001_plan1 from '../assets/house-plans/kd001-plan1.jpg';
import kd001_plan2 from '../assets/house-plans/kd001-plan2.jpg';
import kd003 from '../assets/house-plans/kd003.jpg';
import kd003_plan1 from '../assets/house-plans/kd003-plan1.jpg';
import kd003_plan2 from '../assets/house-plans/kd003-plan2.jpg';
import kostroma53 from '../assets/house-plans/kostroma53.jpg';
import kostroma53_plan1 from '../assets/house-plans/kostroma53-plan1.jpg';
import kostroma53_plan2 from '../assets/house-plans/kostroma53-plan2.jpg';
import moskva51 from '../assets/house-plans/moskva51.jpg';
import moskva51_plan1 from '../assets/house-plans/moskva51-plan1.jpg';
import moskva51_plan2 from '../assets/house-plans/moskva51-plan2.jpg';
import noginsk57 from '../assets/house-plans/noginsk57.jpg';
import noginsk57_plan1 from '../assets/house-plans/noginsk57-plan1.jpg';
import noginsk57_plan2 from '../assets/house-plans/noginsk57-plan2.jpg';
import rublevka59 from '../assets/house-plans/rublevka59.jpg';
import rublevka59_plan1 from '../assets/house-plans/rublevka59-plan1.jpg';
import rublevka59_plan2 from '../assets/house-plans/rublevka59-plan2.jpg';
import zodchiy61 from '../assets/house-plans/zodchiy61.jpg';
import zodchiy61_plan1 from '../assets/house-plans/zodchiy61-plan1.jpg';
import zodchiy61_plan2 from '../assets/house-plans/zodchiy61-plan2.jpg';

export const images = {
    static: {
        logo: logo,

        plant: plant,
        check: check,
        car: car, train: train,
        file: file,
        more: more,

        bg_home: bg_home,
        house_field: house_field,
        forest: forest,
        house2: house2,
        timber1: timber1, timber2: timber2,
        log1: log1, log2: log2, log3: log3,
        finish1: finish1, finish2: finish2,

        galich76: galich76, galich76_plan1: galich76_plan1, galich76_plan2: galich76_plan2,
        kd001: kd001, kd001_plan1: kd001_plan1, kd001_plan2: kd001_plan2,
        kd003: kd003, kd003_plan1: kd003_plan1, kd003_plan2: kd003_plan2,
        kostroma53: kostroma53, kostroma53_plan1: kostroma53_plan1, kostroma53_plan2: kostroma53_plan2,
        moskva51: moskva51, moskva51_plan1: moskva51_plan1, moskva51_plan2: moskva51_plan2,
        noginsk57: noginsk57, noginsk57_plan1: noginsk57_plan1, noginsk57_plan2: noginsk57_plan2,
        rublevka59: rublevka59, rublevka59_plan1: rublevka59_plan1, rublevka59_plan2: rublevka59_plan2,
        zodchiy61: zodchiy61, zodchiy61_plan1: zodchiy61_plan1, zodchiy61_plan2: zodchiy61_plan2,
    },

    light: {
        theme: moon,
        arrow: arrow_b,
        download: download_b,
        phone: phone_b, email: email_b,
        delivery: delivery_b, unload: unload_b, assemble: assemble_b, moscow: moscow_b,
    },

    dark: {
        theme: sun,
        arrow: arrow_w,
        download: download_w,
        phone: phone_w, email: email_w,
        delivery: delivery_w, unload: unload_w, assemble: assemble_w, moscow: moscow_w,
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
