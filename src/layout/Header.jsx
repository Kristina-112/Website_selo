import {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {images, ThemeContext} from '../utils/themeContext.jsx'

export default function Header() {
    const {theme, handleThemeChange} = useContext(ThemeContext);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 300);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <header className={`navbar ${scrolled ? "small" : ""}`}>
            <Link to="/" className='navbar_logo'>
                <img src={images.static.logo} alt="logo"/>
                <div>
                    <h2>Заповедное</h2>
                    <p>дачный посёлок</p>
                </div>
            </Link>

            <div className="nav_items">
                <Link className="nav_item" to="/">
                    О нас
                </Link>
                <Link className="nav_item" to="/house-plans">
                    Проекты домов
                </Link>
                <Link className="nav_item" to="/">
                    Ген. план
                </Link>
                <Link className="nav_item" to="">
                    Галерея
                </Link>
                <Link className="nav_item" to="/news">
                    Документы
                </Link>
            </div>

            <img className="navbar_theme"
                 onClick={handleThemeChange}
                 src={images[theme].theme} alt="сменить тему"/>
            <div className='contacts d-column'>
                <p>+7 495 724 28 98</p>
                <p>zapovednoe07@mail.ru</p>
            </div>
        </header>
    );
}