// Header.jsx
import React from 'react';
import Navigation from './Navigation'; // Assuming Navigation.jsx is in the same directory as Header.jsx
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navigation />
        </header>
    );
};

export default Header;