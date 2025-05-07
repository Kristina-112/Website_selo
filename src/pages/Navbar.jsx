import React, { useState } from 'react'; 
import { VscMenu } from "react-icons/vsc";
import './Navbar.css';
import Themes from './Theme.jsx';

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    return (
        <header className={`navbar ${isDarkTheme ? 'dark' : 'light'}`}>
            <span className='navbar_logo'><h2>Дачный поселок «Заповедное»</h2></span>
            <div className='navbar_right-section'></div>
            <Themes toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
            <nav className='navbar_contacts'>
            <span className='navbar_phone'>+7 495 724 28 98</span>
            <span className='navbar_email'>zapovednoe07@mail.ru</span>
            </nav>
            <nav className={`navbar_nav ${isOpen ? "navbar_nav-active" : ""}`}>
                <ul className='navbar_nav-list'>
                    <li className="navbar_nav-item">О поселке</li>
                    <li className="navbar_nav-item">Проекты домов</li>
                    <li className="navbar_nav-item">Генеральный план</li>
                    <li className="navbar_nav-item">Презентации</li>
                    <li className="navbar_nav-item">Контакты</li>
                    <li className="navbar_nav-item">Схема проезда</li>
                    <li className="navbar_nav-item">Документы</li>
                </ul>
            </nav>
            <button className='navbar_menu-button' onClick={() => setOpen(!isOpen)}>
                <VscMenu style={{width: '30px', height: '25px'}}/>
            </button>
        </header>
    );
}