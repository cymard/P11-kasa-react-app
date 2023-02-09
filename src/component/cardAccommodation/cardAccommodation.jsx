import React from 'react';
import './cardAccommodation.scss';
function cardAccommodation ({children}) {
    return <div className='cardAccommodation'>
        <p>{children ? children : 'Titre de la location'}</p>
    </div>
}

export default cardAccommodation;