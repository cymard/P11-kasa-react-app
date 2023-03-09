import React from 'react';
import './footer.scss';
import kasaLogoWhite from './images/LOGO-white.png';

function Footer () {
    return <footer>
        <img src={kasaLogoWhite} alt='logo Kasa blanc'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
}

export default Footer;
