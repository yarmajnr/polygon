import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Home from './Home';
import Wallet from './Wallet';
import AvailableFood from './AvailableFood';
import MakeOrder from './MakeOrder';
import { fetchAvailableFoods, fetchWalletBalance } from '../utils/api';

const App = () => {
    const [currentPage, setCurrentPage] = useState('home');
    const [availableFoods, setAvailableFoods] = useState([]);
    const [walletBalance, setWalletBalance] = useState(0);

    useEffect(() => {
        const userId = 1; // Replace with actual user ID
        fetchAvailableFoods().then(setAvailableFoods);
        fetchWalletBalance(userId).then(data => setWalletBalance(data.balance));
    }, []);

    const renderContent = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'wallet':
                return <Wallet balance={walletBalance} />;
            case 'availableFood':
                return <AvailableFood foods={availableFoods} />;
            case 'makeOrder':
                return <MakeOrder />;
            default:
                return <Home />;
        }
    };

    return (
        <div id="root">
            <Navbar setCurrentPage={setCurrentPage} />
            <Sidebar setCurrentPage={setCurrentPage} />
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default App;
