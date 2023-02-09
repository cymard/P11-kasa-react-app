import React from 'react';
import CardAccommodation from '../../component/cardAccommodation/cardAccommodation';
import Banner from '../../component/banner/banner';
import './home.scss';
import paysageMer from '../../images/banner/paysage-mer.png';

function Home() {
    return <main>
        <Banner src={paysageMer} alt={'image d\'un paysage'}>Chez vous, partout et ailleurs</Banner>
        <section>
            <CardAccommodation></CardAccommodation>
            <CardAccommodation></CardAccommodation>
            <CardAccommodation></CardAccommodation>
            <CardAccommodation></CardAccommodation>
            <CardAccommodation></CardAccommodation>
            <CardAccommodation></CardAccommodation>
        </section>
    </main>
}

export default Home;