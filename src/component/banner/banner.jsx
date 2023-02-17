import React from 'react';
import './banner.scss';

function Banner ({src, alt, children}) {
    return <header>
        <img src={src} alt={alt}/>
        <p>{children}</p>
    </header>
}

export default Banner;
