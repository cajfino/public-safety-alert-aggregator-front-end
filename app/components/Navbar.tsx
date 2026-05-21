'use client'
import { useState } from 'react';


export default function Navbar(){

    const [menuOpen,setMenuOpen] = useState(false);
    const [alertPreferencesOpen,setAlertPreferencesOpen] = useState(false);

    function handleMenuClick(){
        setMenuOpen(!menuOpen);
        alert('menu is open!')
    }

    function handleAlertPreferenceClick(){
        setAlertPreferencesOpen(!alertPreferencesOpen)
        alert('alert preferences are open!')
    }

    return(
        <nav>
            <div className="nav-logo">
                {/* <img src="/" alt="logo" /> */}
                <span className="nav-logo-icon">👽</span>
                <p>Critical Signal</p>
            </div>
            <div className="nav-controls">
                <input type="text" placeholder="Search alerts" />
                <button onClick={handleMenuClick}>
                    ☰
                </button>
                <button onClick={handleAlertPreferenceClick}>
                    🔔
                </button>
            </div>
        </nav>
    );
}