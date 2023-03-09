import React, {useEffect, useState} from 'react';
import CardAccommodation from '../../component/cardAccommodation/cardAccommodation';
import Banner from '../../component/banner/banner';
import './home.scss';
import paysageMer from './images/paysage-mer.png';
import Header from '../../layout/header/header';
import useFetch from '../../customHooks/useFetch';

function Home() {
    const [dataAccommodations, setDataAccommodations] = useState([]);
    const {data} = useFetch('data.json');

    useEffect(() => {
        data !== undefined && setDataAccommodations(data);
    }, [data])

    return <>
        <Header pageName='home'/>
        {dataAccommodations.length > 0 && <main className='homeMain'>
            <Banner src={paysageMer} alt="image d'un paysage">Chez vous, partout et ailleurs</Banner>
            <section>
                {dataAccommodations.map(accommodation =>
                    <CardAccommodation
                        img={accommodation.cover}
                        id={accommodation.id}
                        key={accommodation.id}
                    >
                        {accommodation.title}
                    </CardAccommodation>
                )}
            </section>
        </main>
        }
    </>
}

export default Home;
