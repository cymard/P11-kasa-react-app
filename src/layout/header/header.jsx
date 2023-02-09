import React from 'react';
import { Link } from 'react-router-dom';
import kasaLogoOrange from '../../images/logo/LOGO-orange.png';
import './header.scss';

function Header () {
    return <header>
        <img src={kasaLogoOrange} alt='logo KASA orange'/>
        <nav>
            <ul>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/about'>A Propos</Link></li>
            </ul>
        </nav>
    </header>
}

export default Header;