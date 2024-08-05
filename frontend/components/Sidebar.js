import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    <Link to="/wallet">Wallet</Link>
                </li>
                <li><Link to="/available-food">Available Food</Link></li>
                <li><Link to="/make-order">Make Order</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
