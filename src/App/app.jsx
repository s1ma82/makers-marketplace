import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComp from '../Components/header/header-comp';
import NavComp from '../Components/nav/nav-comp';
import HomePageComp from '../Components/pages/home-page/home-page-comp';

const App = () => {
    return (
        <> 
            <BrowserRouter>
                <HeaderComp/>
                <NavComp/>
                <Routes>
                    <Route path='/makers-marketplace/' element={<HomePageComp/>} />
                </Routes>
            </BrowserRouter>

        </>
    );
}

export default App;
