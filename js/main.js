document.addEventListener("DOMContentLoaded", function() {
    const root = document.getElementById("root");

    const nav = document.createElement("nav");
    nav.innerHTML = `
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#wallet">Wallet</a></li>
            <li><a href="#available-food">Available Food</a></li>
            <li><a href="#make-order">Make Order</a></li>
        </ul>
    `;

    const main = document.createElement("main");
    main.innerHTML = `
        <section id="home">
            <h1>Welcome to Polygon Restaurant</h1>
        </section>
        <section id="wallet" style="display: none;">
            <h1>Wallet</h1>
            <p>Balance: <span id="wallet-balance">0.00</span> NGN</p>
            <button id="fund-wallet">Fund Wallet</button>
        </section>
        <section id="available-food" style="display: none;">
            <h1>Available Food</h1>
            <ul id="food-list"></ul>
        </section>
        <section id="make-order" style="display: none;">
            <h1>Make Order</h1>
            <form id="order-form">
                <label for="food-item">Food Item:</label>
                <input type="text" id="food-item" name="food-item">
                <label for="price">Price:</label>
                <input type="number" id="price" name="price">
                <button type="submit">Order</button>
            </form>
        </section>
    `;

    root.appendChild(nav);
    root.appendChild(main);

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.querySelectorAll("main section").forEach(section => {
                section.style.display = "none";
            });
            document.getElementById(targetId).style.display = "block";
        });
    });

    const walletBalanceSpan = document.getElementById("wallet-balance");
    const fundWalletButton = document.getElementById("fund-wallet");

    fundWalletButton.addEventListener("click", function() {
        fetch('/api/fund-wallet/', { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                walletBalanceSpan.textContent = data.new_balance;
            });
    });

    const foodList = document.getElementById("food-list");

    fetch('/api/posts/')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const li = document.createElement("li");
                li.textContent = `${post.title} - ${post.content}`;
                foodList.appendChild(li);
            });
        });

    const orderForm = document.getElementById("order-form");

    orderForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const foodItem = this['food-item'].value;
        const price = this['price'].value;

        fetch('/api/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ food_item: foodItem, price: price }),
        })
        .then(response => response.json())
        .then(order => {
            alert(`Order placed: ${order.food_item} for ${order.price} NGN`);
        });
    });
});
