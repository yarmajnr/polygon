import React, { useState, useEffect } from 'react';
import { getAvailableFoods } from '../utils/api';

function AvailableFood() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        // Fetch available foods from API
        getAvailableFoods().then(fetchedFoods => setFoods(fetchedFoods));
    }, []);

    return (
        <div>
            <h2>Available Food</h2>
            <ul>
                {foods.map(food => (
                    <li key={food.id}>{food.name} - ₦{food.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default AvailableFood;
