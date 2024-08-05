import React from 'react';

const Navbar = ({ setCurrentPage }) => (
    <div className="navbar">
        <span className="hamburger" onClick={() => document.querySelector('.sidebar').classList.toggle('open')}>
            ☰
        </span>
    </div>
);

export default Navbar;
