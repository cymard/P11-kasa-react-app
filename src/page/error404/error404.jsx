import React from 'react';
import Header from '../../layout/header/header';
import './error404.scss';

function Error404 () {
    return <>
        <Header/>
        <main id="error404-container">
            <section>
                <p>404</p>
                <p>Oups! La page que vous demandez n'existe pas.</p>
            </section>
            <a href="../">Retourner sur la page d'accueil</a>
        </main>
    </>
}

export default Error404;
