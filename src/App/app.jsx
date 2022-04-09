import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavComp from '../Components/nav/nav-comp';
import HomePageComp from '../Components/pages/home-page/home-page-comp';

const App = () => {
    return (
        <> 
            <HashRouter>
                <NavComp/>
                <Routes>
                    <Route path='/' element={<HomePageComp/>} />
                </Routes>
            </HashRouter>

        </>
    );
}

export default App;
