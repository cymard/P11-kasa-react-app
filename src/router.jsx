import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import HousingInformation from './page/housingInformation';
import Error404 from './page/error404';

function Router () {
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/housing-information' element={<HousingInformation/>} />
        <Route path='/about' element={<About/>} />
        <Route path="*" element={<Error404 />} />
    </Routes>
}

export default Router