export const getAvailableFoods = async () => {
    // Fetch available foods from the backend
    // Replace with actual API call
    return [
        { id: 1, name: 'Pizza', price: 1500 },
        { id: 2, name: 'Burger', price: 800 },
        { id: 3, name: 'Pasta', price: 1200 },
    ];
};

export const placeOrder = async (foodId) => {
    // Place an order with the backend
    // Replace with actual API call
    console.log(`Order placed for food ID: ${foodId}`);
};

export const fundWallet = () => {
    window.location.href = 'https://paystack.com/pay/polygon';
};

