import React, {useState} from 'react';
import './about.scss';
import Header from '../../layout/header/header';
import valleyLandscape from './images/valley-landscape.png';
import Banner from '../../component/banner/banner';
import Collapse from '../../component/collapse/collapse';

function About () {
    const [collapseData, setCollapseData] = useState([
        {
            title: 'Fiabilité',
            content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
        },
        {
            title: 'Respect',
            content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            title: 'Service',
            content: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.',
        },
        {
            title: 'Sécurité',
            content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.',
        },
    ]);

    return <>
        <Header pageName='about'/>
        <main id="about-container">
            <Banner src={valleyLandscape} alt="paysage d\'une vallée avec des montagnes"/>
            <section>
                {collapseData.map((element, index) => <Collapse name={element.title} key={index}>{element.content}</Collapse>)}
            </section>
        </main>
    </>
}

export default About;
