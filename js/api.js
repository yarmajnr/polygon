const API_BASE_URL = 'https://your-backend-url.com/api'; // Replace with your backend URL

async function fetchAvailableFoods() {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/available-foods/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching available foods:', error);
        return [];
    }
}

async function fetchWalletBalance(userId) {
    try {
        const response = await fetch(`${API_BASE_URL}/accounts/wallet/${userId}/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching wallet balance:', error);
        return { balance: 0 };
    }
}

async function makeOrder(userId, orderDetails) {
    try {
        const response = await fetch(`${API_BASE_URL}/orders/make-order/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userId, orderDetails })
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error making order:', error);
        return null;
    }
}

// Example usage of the above functions
// (These would be called from your main.js or other parts of your application as needed)

async function updateAvailableFoods() {
    const availableFoods = await fetchAvailableFoods();
    // Update the UI with the fetched available foods
    console.log('Available Foods:', availableFoods);
}

async function updateWalletBalance(userId) {
    const wallet = await fetchWalletBalance(userId);
    // Update the UI with the fetched wallet balance
    console.log('Wallet Balance:', wallet.balance);
}

// Initialize example userId for testing purposes
const userId = 1; // Replace with actual user ID

// Fetch and update data on page load
document.addEventListener('DOMContentLoaded', function () {
    updateAvailableFoods();
    updateWalletBalance(userId);
});
