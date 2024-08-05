import React, { useState, useEffect } from 'react';
import { getAvailableFoods, placeOrder } from '../utils/api';

function MakeOrder() {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState(null);

    useEffect(() => {
        // Fetch available foods from API
        getAvailableFoods().then(fetchedFoods => setFoods(fetchedFoods));
    }, []);

    const handleOrder = () => {
        if (selectedFood) {
            placeOrder(selectedFood.id);
        }
    };

    return (
        <div>
            <h2>Make Order</h2>
            <select onChange={(e) => setSelectedFood(foods.find(food => food.id === e.target.value))}>
                <option value="">Select Food</option>
                {foods.map(food => (
                    <option key={food.id} value={food.id}>
                        {food.name} - ₦{food.price}
                    </option>
                ))}
            </select>
            <button onClick={handleOrder}>Order Now</button>
        </div>
    );
}

export default MakeOrder;
