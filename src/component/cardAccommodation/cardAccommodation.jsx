import React from 'react';
import './cardAccommodation.scss';

function cardAccommodation ({img, children}) {
    return <article className='cardAccommodation'>
        <img src={img} alt="" />
        <p>{children ? children : 'Titre de la location'}</p>
    </article>
}

export default cardAccommodation;
