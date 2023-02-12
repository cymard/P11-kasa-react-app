import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import About from './page/about/about';
import Accommodation from './page/accommodation/accommodation';
import Error404 from './page/error404';

function Router () {
    return <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/accommodation' element={<Accommodation/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error404 />} />
    </Routes>
}

export default Router