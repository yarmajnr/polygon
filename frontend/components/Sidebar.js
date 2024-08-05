import React from 'react';

const Sidebar = ({ setCurrentPage }) => (
    <div className="sidebar">
        <a href="#" onClick={() => setCurrentPage('home')}>Home</a>
        <a href="#" onClick={() => setCurrentPage('wallet')}>Wallet</a>
        <a href="#" onClick={() => setCurrentPage('availableFood')}>Available Food</a>
        <a href="#" onClick={() => setCurrentPage('makeOrder')}>Make Order</a>
        <a href="#" onClick={() => setCurrentPage('signout')}>Sign Out</a>
    </div>
);

export default Sidebar;
