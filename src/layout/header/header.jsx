import React from 'react';
import { Link } from 'react-router-dom';
import kasaLogoOrange from './images/LOGO-orange.png';
import './header.scss';

function Header ({pageName}) {
    return <header>
        <img src={kasaLogoOrange} alt='logo KASA orange'/>
        <nav>
            <ul>
                <li><Link className={pageName === 'home' ? 'underline' : null} to='/'>Accueil</Link></li>
                <li><Link className={pageName === 'about' ? 'underline' : null}  to='/about'>A Propos</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;
