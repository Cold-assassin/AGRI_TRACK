// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Transaction Animations
function createTransaction() {
    const dashboard = document.querySelector('.dashboard-preview');
    const transaction = document.createElement('div');
    transaction.className = 'transaction';
    // Random position within dashboard
    const x = Math.random() * 80 + 10;
    const y = Math.random() * 80 + 10;
    transaction.style.left = `${x}%`;
    transaction.style.top = `${y}%`;
    dashboard.appendChild(transaction);
    // Animate
    transaction.style.animation = 'transaction 2s forwards';
    // Remove after animation
    setTimeout(() => {
        transaction.remove();
    }, 2000);
}

// Create transactions periodically
setInterval(createTransaction, 300);

// Animate stats on