import React from 'react';
import './cardAccommodation.scss';

function cardAccommodation ({img, children}) {
    return <article className='cardAccommodation'>
        <img src={img} alt="" />
        <div className='overlayImg'>
            <p>{children ? children : 'Titre de la location'}</p>
        </div>
    </article>
}

export default cardAccommodation;
