import React from 'react';

const Wallet = ({ balance }) => (
    <div>
        <h1>Your Wallet</h1>
        <p>Balance: ₦{balance}</p>
        <a href="https://paystack.com/pay/polygon">Fund Wallet</a>
    </div>
);

export default Wallet;

