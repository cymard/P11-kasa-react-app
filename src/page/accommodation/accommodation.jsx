import React, {useEffect, useState} from 'react';
import Header from '../../layout/header/header';
import './accommodation.scss';
import SlideShow from '../../component/slideShow/slideShow';
import HostProfile from '../../component/hostProfile/hostProfile';
import StarsRating from '../../component/starsRating/starsRating';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import Collapse from '../../component/collapse/collapse';
import Tag from '../../component/tag/tag';

function Accommodation() {
    const {id} = useParams();
    const {data} = useFetch('../data.json');
    const [accomodation, setAccomodation] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (data !== undefined && data.length > 0) {
            data.map(element => {
                if (element.id === id) {
                    setAccomodation(element)
                    setIsLoaded(true)
                }
            })
        }
    }, [data])

    return <>
        <Header/>
        <main className='accommodation'>
            {isLoaded ?
                <>
                    <SlideShow pictures={accomodation.pictures}/>
                    <section className='informationSection'>
                        <div className='containerLocationinformations'>
                            <h1>{accomodation.title}</h1>
                            <p>{accomodation.location}</p>
                            <ul>
                                {accomodation.tags &&
                                    accomodation.tags.map((tagContent, index) => <Tag key={'tag-' + index}>{tagContent}</Tag>)
                                }
                            </ul>
                        </div>
                        <div className='containerProfileAndRating'>
                            <HostProfile
                                name={accomodation.host.name}
                                picture={accomodation.host.picture}
                            />
                            <StarsRating ratingNumber={accomodation.rating}/>
                        </div>
                    </section>
                    <section className='dropdownContainer'>
                        <Collapse name='Description'>{accomodation.description}</Collapse>
                        <Collapse name='Équipements'>
                            {accomodation.equipments.map((equipment, index) => <p className='equipment' key={index}>{equipment}</p>)}
                        </Collapse>
                    </section>
                </>
                :
                <p>Chargement...</p>
            }
        </main>
    </>
}

export default Accommodation;
