// Product Data
const products = [
    {
        id: 1,
        name: "Lavender Serenity",
        description: "Infused with pure organic lavender essential oil. Designed to calm the mind and soothe the skin.",
        price: "$12.00",
        image: "assets/images/products/lavender_soap.png"
    },
    {
        id: 2,
        name: "Golden Turmeric",
        description: "Rich in antioxidants and organic turmeric extract. Perfect for a natural, healthy glow.",
        price: "$14.00",
        image: "assets/images/products/turmeric_soap.png"
    },
    {
        id: 3,
        name: "Neem & Aloe Fresh",
        description: "A natural purifier combining the antibacterial properties of neem with the deep hydration of pure aloe vera.",
        price: "$11.00",
        image: "assets/images/products/neem_aloe_soap.png"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    
    // Render Products
    const productGrid = document.getElementById('productGrid');
    
    products.forEach((product, index) => {
        // Create an artificial delay class for cascading animations
        const animationDelay = `transition-delay: ${index * 0.15}s;`;
        
        const cardHTML = `
            <div class="product-card fade-up" style="${animationDelay}">
                <div class="product-image-container">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.description}</p>
                    <span class="product-price">${product.price}</span>
                    <button class="add-btn">Add to Cart</button>
                </div>
            </div>
        `;
        productGrid.innerHTML += cardHTML;
    });

    // Scroll Navbar Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('expanded');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('expanded');
        }
    });

    // Intersection Observer for fade-up animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
                // Optional: stop observing once visible
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up');
    animatedElements.forEach(el => observer.observe(el));

    // Simple Parallax Effect on Hero Image
    const heroImage = document.querySelector('.hero-image');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
            heroImage.style.transform = `translateY(${scrolled * 0.4}px)`;
        }
    });
});
