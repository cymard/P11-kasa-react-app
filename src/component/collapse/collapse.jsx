import React, { useState } from 'react';
import './collapse.scss';

function Collapse ({name, children}) {
    const [isCollapseOpen, setIsCollapseOpen] = useState(false);

    return <details className='collapse'>
        <summary
            onClick={() => setIsCollapseOpen(isCollapseOpen => !isCollapseOpen)}
            className='collapseHeader'
        >
            <p>{name}</p>
            <span>
                <i className={isCollapseOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}></i>
            </span>
        </summary>
        {isCollapseOpen && <div className='collapseBody'>{children}</div>}
    </details>
}

export default Collapse;
