import React, { useEffect, useState } from 'react';
import Header from '../../layout/header/header';
import './accommodation.scss';
import SlideShow from '../../component/slideShow/slideShow';
import HostProfile from '../../component/hostProfile/hostProfile';
import StarsRating from '../../component/starsRating/starsRating';
import { useParams } from 'react-router-dom';
import useFetch from '../../customHooks/useFetch';
import Collapse from '../../component/collapse/collapse';
import Tag from '../../component/tag/tag';

function Accommodation () {
    const { id } = useParams();
    const { data } = useFetch('../data.json');
    const [accommodationData, setAccommodationData] = useState({isLoaded: false, data: []});

    useEffect(() => {

        if(data === undefined || data.length === 0) {
            return;
        }

        data.map(element => {
            if (element.id === id) {
                console.log(element)
                setAccommodationData({isLoaded: true, data: element})
            }
        })
    }, [data])

    return <React.Fragment>
        <Header/>
        <main className='accommodation'>
            {accommodationData.isLoaded ?
                <React.Fragment>
                    <SlideShow pictures={accommodationData.data.pictures}/>

                    <section>
                        <div>
                            <h1>{accommodationData.data.title}</h1>
                            <p>{accommodationData.data.location}</p>
                            <ul>
                                {accommodationData.data.tags &&
                                    accommodationData.data.tags.map((tagContent, index) => <Tag key={'tag-'+index}>{tagContent}</Tag>)
                                }
                            </ul>
                        </div>
                        <div className='containerProfileAndRating'>
                            <HostProfile
                                name={accommodationData.data.host.name}
                                picture={accommodationData.data.host.picture}
                            />
                            <StarsRating startRating={0} rating={accommodationData.data.rating} endRating={5} />
                        </div>
                    </section>
                    <section>
                        <Collapse name='Description'>{accommodationData.data.description}</Collapse>
                        <Collapse name='Équipements'>
                            {accommodationData.data.equipments.map((equipment, index) => <li className='equipment' key={index}>{equipment}</li>)}
                        </Collapse>
                    </section>
                </React.Fragment>
                :
                <p>Chargement...</p>
            }
        </main>
    </React.Fragment>
}

export default Accommodation;
