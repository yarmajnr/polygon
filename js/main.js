document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const content = document.getElementById('content');

    hamburgerIcon.addEventListener('click', function () {
        sidebar.classList.toggle('show');
    });

    document.querySelectorAll('#sidebar ul li a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = link.getAttribute('id');
            loadContent(page);
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        });
    });

    function loadContent(page) {
        if (page === 'wallet') {
            content.innerHTML = `
                <h2>Wallet</h2>
                <p>Current balance: &#8358;0.00</p>
                <button id="fund-wallet-btn">Fund Wallet</button>
            `;

            document.getElementById('fund-wallet-btn').addEventListener('click', function () {
                window.location.href = 'https://paystack.com/pay/polygon';
            });
        } else {
            content.innerHTML = `<h2>${page.replace(/-/g, ' ')}</h2><p>Content for ${page.replace(/-/g, ' ')} goes here.</p>`;
        }
    }

    loadContent('home'); // Load home content by default
});
