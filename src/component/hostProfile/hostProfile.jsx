import React from 'react';
import './hostProfile.scss';

function HostProfile ({name, picture}) {
    return <div className='containerProfile'>
        <p>{name}</p>
        <img src={picture} alt={"profile picture of "+name} />
    </div>
}

export default HostProfile;
