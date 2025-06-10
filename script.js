//product data
const products = [
    {
        id: 1,
        name: "Wooden Train Set",
        price: 24.99,
        image: "imgs/train2.jpg",
        description: "A classic wooden train that encourages imaginative play and motor skills development.",
        category: "trains",
        featured: true
    },
    {
        id: 2,
        name: "Wooden Racing Car",
        price: 19.99,
        image: "imgs/car2.jpg",
        description: "Sleek, sturdy wooden racing car with smooth-rolling wheels and child-safe finishes.",
        category: "cars",
        featured: true
    },
    {
        id: 3,
        name: "Wooden Airplane",
        price: 21.99,
        image: "imgs/plane1.jpg",
        description: "Watch imagination take flight with our beautifully crafted wooden airplane.",
        category: "planes",
        featured: true
    },
    {
        id: 4,
        name: "Classic Block Set",
        price: 34.99,
        image: "imgs/block1.jpg",
        description: "Set of 24 colorful wooden blocks in various shapes for building and learning.",
        category: "blocks",
        featured: false
    },
    {
        id: 5,
        name: "Wooden Boat",
        price: 18.99,
        image: "imgs/boat1.jpg",
        description: "Charming wooden sailboat perfect for imaginative water play.",
        category: "boats",
        featured: false
    }
];

// customer reviews
const customerReviews = [
    {
        name: "Sarah",
        review: "My son loves the wooden train set! The quality is outstanding and it's become his favorite toy.",
        rating: 5,
        date: "May 10, 2025"
    },
    {
        name: "Michael",
        review: "The craftsmanship on these toys is incredible. We purchased the block set and it's both beautiful and durable.",
        rating: 5,
        date: "April 23, 2025"
    },
    {
        name: "Jennifer",
        review: "The airplane is adorable and well-made. My only suggestion would be to add more color options.",
        rating: 4,
        date: "June 2, 2025"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    //event listeners to product buttons
    const productButtons = document.querySelectorAll('.card .btn-primary');
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const cardBody = this.closest('.card-body');
            const productTitle = cardBody.querySelector('.card-title').textContent;
            alert(`You're interested in the ${productTitle}. More details coming soon!`);
        });
    });

    //subscribe button
    const subscribeBtn = document.querySelector('footer .input-group .btn');
    if (subscribeBtn) {
        subscribeBtn.addEventListener('click', function() {
            const emailInput = this.previousElementSibling;
            if (emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            } else {
                alert('Please enter your email address.');
            }
        });
    }

    //smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});