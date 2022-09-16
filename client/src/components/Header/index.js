import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary text-dark mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link className="text-dark" to="/">
          <h1 className="m-0">Beer Thoughts</h1>
        </Link>
        <p className="m-0">What are your thoughts on your favorite beer.</p>
      </div>
    </header>
  );
};

export default Header;