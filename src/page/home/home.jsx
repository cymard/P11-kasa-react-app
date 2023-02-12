import React, {useEffect, useState} from 'react';
import CardAccommodation from '../../component/cardAccommodation/cardAccommodation';
import Banner from '../../component/banner/banner';
import './home.scss';
import paysageMer from './homeImages/paysage-mer.png';
import Header from '../../layout/header/header';
import data from '../../json/data.json';

function Home() {

    const [dataAccommodation, setDataAccommodation] = useState([]);

    useEffect(() => {
        setDataAccommodation(data);
    }, [])

    return <React.Fragment>
        { dataAccommodation.length > 0 && <React.Fragment>
                <Header pageName='home' />
                <main>
                    <Banner src={paysageMer} alt="image d\'un paysage">Chez vous, partout et ailleurs</Banner>
                    <section>
                        { dataAccommodation.map((accommodation) =>
                            <CardAccommodation
                                img={accommodation.cover}
                                key={accommodation.id}
                            >
                                {accommodation.title}
                            </CardAccommodation>
                        )}
                    </section>
                </main>
            </React.Fragment>
        }
    </React.Fragment>
}

export default Home;