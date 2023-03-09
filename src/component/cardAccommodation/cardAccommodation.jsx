import React from 'react';
import './cardAccommodation.scss';

function cardAccommodation ({img, id, children}) {
    return <a href={'accommodation/'+id} className='cardAccommodation'>
        <img src={img} alt="" />
        <p>{children ? children : 'Titre de la location'}</p>
    </a>
}

export default cardAccommodation;
