// src/components/Sidebar.jsx
import {Link} from 'react-router-dom';
import {images, ThemeContext} from '../utils/themeContext.jsx'
import {useContext} from "react";

export default function Sidebar() {
    const {theme, handleThemeChange} = useContext(ThemeContext);

    return (
        <aside className="sidebar">
            <Link to="/">
                <img src={images.static.info}/>
            </Link>

            <Link to="/projects">
                <img src={images.static.projects}/>
            </Link>

            <Link to="/plan">
                <img src={images.static.plan}/>
            </Link>

            <Link to="/gallery">
                <img src={images.static.gallery}/>
            </Link>

            <Link to="/contacts" >
                <img src={images.static.contacts}/>
            </Link>

            <Link to="/road">
                <img src={images.static.road}/>
            </Link>

            <Link to="/documents">
                <img src={images.static.documents}/>
            </Link>

        </aside>
    );
}