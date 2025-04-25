import React, { useEffect } from 'react';
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import './Theme.css';

function Themes({ toggleTheme, isDarkTheme }) {
    useEffect(() => {
        document.body.className = isDarkTheme ? 'dark' : 'light';
    }, [isDarkTheme]);

    return (
        <div className="App">
            <button onClick={toggleTheme} style={{ background: 'transparent', border: 'none' }}>
                <WiMoonAltFirstQuarter style={{ color: isDarkTheme ? '#ffffff' : '#000000', fontSize: '3rem' }}/>
            </button>
        </div>
    );
}

export default Themes;