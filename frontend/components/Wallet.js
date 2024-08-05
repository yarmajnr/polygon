import React, { useState, useEffect } from 'react';
import { fundWallet } from '../utils/api';

function Wallet() {
    const [balance, setBalance] = useState(0);

    useEffect(() => {
        // Fetch real-time wallet balance from API
        // Example API call: fetchWalletBalance().then(balance => setBalance(balance));
    }, []);

    const handleFundWallet = () => {
        fundWallet();
    };

    return (
        <div>
            <h2>Wallet Balance: ₦{balance}</h2>
            <button onClick={handleFundWallet}>Fund Wallet</button>
        </div>
    );
}

export default Wallet;
