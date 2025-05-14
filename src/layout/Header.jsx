import { useState, useContext } from 'react';
import { VscMenu } from "react-icons/vsc";
import {Link} from 'react-router-dom';

import {images, ThemeContext} from '../utils/themeContext.jsx'

export default function Header() {
    const [isOpen, setOpen] = useState(true);
    const {theme, handleThemeChange} = useContext(ThemeContext);

    return (
        <header className="navbar">
            <Link to="/" className='navbar_logo'>
                <img src={images.static.logo} alt="logo"/>
                <div>
                    <h2>Заповедное</h2>
                    <p>дачный посёлок</p>
                </div>
            </Link>
            <img className="theme-toggler"
                 onClick={handleThemeChange}
                 src={images[theme].theme} alt="Toggle Theme"/>
            <div className='navbar_contacts'>
                <span className='navbar_phone'>+7 495 724 28 98</span>
                <span className='navbar_email'>zapovednoe07@mail.ru</span>
            </div>
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
            {/*<button className='navbar_menu-button' onClick={() => setOpen(!isOpen)}>*/}
            {/*    <VscMenu style={{width: '30px', height: '25px'}}/>*/}
            {/*</button>*/}
        </header>
    );
}