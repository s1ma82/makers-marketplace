import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderComp from '../Components/header/header-comp';
import NavComp from '../Components/nav/nav-comp';
import HomePageComp from '../Components/pages/home-page/home-page-comp';
import FooterApp from '../Components/footer/footer-app'

const App = () => {
    return (
        <> 
            <BrowserRouter>
                <HeaderComp/>
                <NavComp/>
                <Routes>
                    <Route path='/makers-markeplace' element={<HomePageComp/>} />
                </Routes>
                <FooterApp/>
            </BrowserRouter>

        </>
    );
}

export default App;
