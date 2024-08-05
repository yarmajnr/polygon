document.addEventListener("DOMContentLoaded", function() {
    const content = document.getElementById('content');

    function loadContent(hash) {
        switch(hash) {
            case '#home':
                content.innerHTML = '<h1>Home</h1><p>Welcome to Polygon Restaurant!</p>';
                break;
            case '#wallet':
                content.innerHTML = '<h1>Wallet</h1><p>Your wallet balance is: NGN <span id="wallet-balance">0.00</span></p><button onclick="fundWallet()">Fund Wallet</button>';
                break;
            case '#available-food':
                content.innerHTML = '<h1>Available Food</h1><p>Loading...</p>';
                fetchAvailableFood();
                break;
            case '#make-order':
                content.innerHTML = '<h1>Make Order</h1><p>Select food to order.</p>';
                break;
            default:
                content.innerHTML = '<h1>Home</h1><p>Welcome to Polygon Restaurant!</p>';
        }
    }

    function fetchAvailableFood() {
        fetch('/api/available-food')
            .then(response => response.json())
            .then(data => {
                const content = document.getElementById('content');
                let foodList = '<ul>';
                data.forEach(food => {
                    foodList += `<li>${food.name} - NGN ${food.price}</li>`;
                });
                foodList += '</ul>';
                content.innerHTML = `<h1>Available Food</h1>${foodList}`;
            });
    }

    function fundWallet() {
        // Integrate with Paystack here
        alert('Funding wallet feature will be implemented here.');
    }

    window.addEventListener('hashchange', function() {
        loadContent(window.location.hash);
    });

    loadContent(window.location.hash || '#home');
});
