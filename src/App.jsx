import React from 'react';
import {Outlet, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
    return (
        <>
            <Header />
                <Outlet />
        </>
    )
}


export default App;