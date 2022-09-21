import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>
            <a href="./index.html">
                <div className="logo-one">BREWERIES</div>
                <div className="logo-two">&FRIENDS</div>
            </a>
        </h1>
    </header>
  );
};

export default Header;