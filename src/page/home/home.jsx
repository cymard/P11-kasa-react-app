import React, {useEffect, useState} from 'react';
import CardAccommodation from '../../component/cardAccommodation/cardAccommodation';
import Banner from '../../component/banner/banner';
import './home.scss';
import paysageMer from './images/paysage-mer.png';
import Header from '../../layout/header/header';

function Home() {
    const [dataAccommodation, setDataAccommodation] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => setDataAccommodation(data))
    }, [])

    return <React.Fragment>
        <Header pageName='home'/>
        {dataAccommodation.length > 0 && <main>
            <Banner src={paysageMer} alt="image d'un paysage">Chez vous, partout et ailleurs</Banner>
            <section>
                {dataAccommodation.map(accommodation =>
                    <CardAccommodation
                        img={accommodation.cover}
                        key={accommodation.id}
                    >
                        {accommodation.title}
                    </CardAccommodation>
                )}
            </section>
        </main>
        }
    </React.Fragment>
}

export default Home;
