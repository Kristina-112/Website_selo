import React, {useState} from 'react'; 
import { VscMenu } from "react-icons/vsc";
import './Navbar.css'
import Themes from './Theme.jsx'

export default function() {
    const [isOpen, setOpen] = useState();
    return(
    <header className='navbar'>
        <span className='navbar_logo'><h2>Дачный поселок «Заповедное»</h2></span>
        <Themes />
        <nav className={`navbar_nav ${isOpen ? "navbar_nav-active" : ""}`}>
            <ul className = 'navbar_nav-list'>
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
        <VscMenu />
        </button>
    </header>
    )
}