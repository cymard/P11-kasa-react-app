import React, {useEffect, useState} from 'react';
import CardAccommodation from '../../component/cardAccommodation/cardAccommodation';
import Banner from '../../component/banner/banner';
import './home.scss';
import paysageMer from './images/paysage-mer.png';
import Header from '../../layout/header/header';
import useFetch from '../../customHooks/useFetch';

function Home() {
    const [dataAccommodation, setDataAccommodation] = useState([]);
    const {data} = useFetch('data.json')

    useEffect(() => {
        data !== undefined && setDataAccommodation(data);
    }, [data])

    return <React.Fragment>
        <Header pageName='home'/>
        {dataAccommodation.length > 0 && <main className='homeMain'>
            <Banner src={paysageMer} alt="image d'un paysage">Chez vous, partout et ailleurs</Banner>
            <section>
                {dataAccommodation.map(accommodation =>
                    <CardAccommodation
                        img={accommodation.cover}
                        key={accommodation.id}
                        id={accommodation.id}
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
