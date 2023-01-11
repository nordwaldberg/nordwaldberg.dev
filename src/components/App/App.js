import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import styles from './App.module.scss';
import Preloader from "../Preloader/Preloader";
import Header from "../Header/Header";
import MainPage from "../../pages/MainPage/MainPage";
import AboutPage from "../../pages/AboutPage/AboutPage";

const App = () => {
    const [loading, setLoading] = useState(false);

    if (loading) {
        return <Preloader/>
    }

    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path='*' element={
                    <Navigate to={"/"}/>
                }/>
            </Routes>
        </Router>
    );
};

export default App;