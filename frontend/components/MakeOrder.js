import React, { useState } from 'react';
import { makeOrder } from '../utils/api';

const MakeOrder = () => {
    const [orderDetails, setOrderDetails] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = 1; // Replace with actual user ID
        const result = await makeOrder(userId, orderDetails);
        if (result) {
            alert('Order placed successfully');
        } else {
            alert('Failed to place order');
        }
    };

    return (
        <div>
            <h1>Make an Order</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                    placeholder="Enter your order details"
                ></textarea>
                <button type="submit">Place Order</button>
            </form>
        </div>
    );
};

export default MakeOrder;
