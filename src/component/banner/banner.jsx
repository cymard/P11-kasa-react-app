import React from 'react';
import './banner.scss';

function Banner ({src, alt, children}) {
    return <div className='banner' role='banner'>
        <img src={src} alt={alt}/>
        <div className='overlayImg'>
            <p>{children}</p>
        </div>
    </div>
}

export default Banner;
