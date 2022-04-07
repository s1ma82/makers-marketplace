import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HeaderComp from '../Components/header/header-comp';
import NavComp from '../Components/nav/nav-comp';
import HomePageComp from '../Components/pages/home-page/home-page-comp';

const App = () => {
    return (
        <> 
            <HashRouter>
                <HeaderComp/>
                <NavComp/>
                <Routes>
                    <Route path='/' element={<HomePageComp/>} />
                </Routes>
            </HashRouter>

        </>
    );
}

export default App;
