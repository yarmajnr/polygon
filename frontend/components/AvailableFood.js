import React from 'react';

const AvailableFood = ({ foods }) => (
    <div>
        <h1>Available Foods</h1>
        <ul>
            {foods.map(food => (
                <li key={food.id}>{food.name} - ₦{food.price}</li>
            ))}
        </ul>
    </div>
);

export default AvailableFood;

