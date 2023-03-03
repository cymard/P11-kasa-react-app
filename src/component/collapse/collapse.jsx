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
                <i className={collapseState ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
            </span>
        </div>
        {collapseState && <div className='collapseBody'>{children}</div>}
    </div>
}

export default Collapse;
