import React from 'react';
import './about.scss';
import Header from '../../layout/header/header';

function About () {

    return <React.Fragment>
        <Header pageName='about'/>
        <div className='test'>About</div>
    </React.Fragment>
}

export default About;
