import React from 'react';
import Header from '../../layout/header/header';
import './accommodation.scss';
import SlideShow from '../../component/slideShow/slideShow';
import HostProfile from '../../component/hostProfile/hostProfile';
import StarsRating from '../../component/starsRating/starsRating';

function Accommodation () {

    return <React.Fragment>
        <Header/>
        <main>
            <SlideShow/>
            <section>
                <div>
                    <h1></h1>
                    <p></p>
                    <ul>
                        <li>Résultats requete</li>
                        <li>Résultats requete</li>
                        <li>Résultats requete</li>
                    </ul>
                </div>
                <div>
                    <HostProfile/>
                    <StarsRating/>
                </div>
            </section>
            <section>
                <article>composant</article>
                <article>composant</article>
            </section>
        </main>
    </React.Fragment>
}

export default Accommodation;
