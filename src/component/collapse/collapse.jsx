import React, { useState } from 'react';
import './collapse.scss';

function Collapse ({name, children}) {
    const [collapseState, setCollapseState] = useState(false);

    return <div className='collapse'>
        <div
            onClick={() => setCollapseState(collapseState => !collapseState)}
            className='collapseHeader'
        >
            <p>{name}</p>
            <span>
                {collapseState
                ? <i className='fa-solid fa-chevron-down'></i>
                : <i className='fas fa-chevron-up'></i>
            }</span>
        </div>
        {collapseState && <div className='collapseBody'>{children}</div>}
    </div>
}

export default Collapse;
