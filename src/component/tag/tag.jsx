import React from 'react';
import './tag.scss';

function Tag ({children}) {
    return <li className='tags'>{children}</li>
}

export default Tag;