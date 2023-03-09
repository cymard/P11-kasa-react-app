import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Router from './router';
import Footer from './layout/footer/footer';
import './style/_normalizer.scss';
import './style/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Router/>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>
);

reportWebVitals();
