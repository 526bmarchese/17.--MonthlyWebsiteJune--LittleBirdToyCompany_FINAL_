// Products data
const products = [
    {
        id: 1,
        name: "Classic Wooden Train",
        price: 24.99,
        image: "imgs/train1.jpg",
        category: "train",
        description: "Handcrafted wooden train with movable wheels and colorful accents.",
        details: "This classic wooden train is made of sustainable birch wood and finished with non-toxic paint. Perfect for children ages 3+. Each train is handcrafted with care in our small workshop.",
        ageRange: "3-8 years",
        materials: "Sustainable birch wood, non-toxic paint",
        dimensions: "8\" × 2.5\" × 3\""
    },
    {
        id: 2,
        name: "Blue Engine Train",
        price: 29.99,
        image: "imgs/train2.jpg",
        category: "train",
        description: "Beautiful blue wooden engine with connecting cars.",
        details: "Our blue engine train features a sturdy design perfect for little hands. The connecting cars can be attached to other train sets in our collection.",
        ageRange: "3-10 years",
        materials: "Maple wood, water-based paint",
        dimensions: "10\" × 3\" × 4\""
    },
    {
        id: 3,
        name: "Vintage Racing Car",
        price: 19.99,
        image: "imgs/car1.jpg",
        category: "car",
        description: "Vintage-style wooden racing car with smooth-rolling wheels.",
        details: "Take a trip back to the golden era of racing with this vintage-inspired wooden car. Each car features hand-painted details and smooth wooden wheels.",
        ageRange: "3+ years",
        materials: "Beech wood, non-toxic paint",
        dimensions: "5\" × 2\" × 2\""
    },
    {
        id: 4,
        name: "Red Sports Car",
        price: 22.99,
        image: "imgs/car2.jpg",
        category: "car",
        description: "Sleek red wooden sports car with modern design.",
        details: "Our red sports car is a modern take on wooden toys. Its sleek design and smooth finish make it a favorite among kids and collectors alike.",
        ageRange: "3+ years",
        materials: "Cherry wood, food-grade finish",
        dimensions: "6\" × 2.5\" × 1.5\""
    },
    {
        id: 5,
        name: "Wooden Biplane",
        price: 34.99,
        image: "imgs/plane1.jpg",
        category: "plane",
        description: "Classic biplane with spinning propeller and detailed wings.",
        details: "Take to the skies with our wooden biplane! Features include a spinning propeller, detailed wings, and a sturdy design that will last for generations.",
        ageRange: "4+ years",
        materials: "Maple and walnut woods",
        dimensions: "9\" wingspan × 7\" length"
    },
    {
        id: 6,
        name: "Sailboat",
        price: 27.99,
        image: "imgs/boat1.jpg",
        category: "boat",
        description: "Wooden sailboat that actually floats in water.",
        details: "This beautiful wooden sailboat is not just a display piece - it really floats! Perfect for bath time or water play outdoors.",
        ageRange: "4+ years",
        materials: "Water-resistant wood, cotton sails",
        dimensions: "7\" × 3\" × 9\" height"
    },
    {
        id: 7,
        name: "Building Block Set",
        price: 39.99,
        image: "imgs/block1.jpg",
        category: "block",
        description: "Set of 24 colored wooden building blocks in various shapes.",
        details: "Inspire creativity with our 24-piece building block set. Featuring multiple shapes, sizes, and colors, these blocks are perfect for open-ended play and building.",
        ageRange: "2+ years",
        materials: "Solid maple wood with non-toxic colored stains",
        dimensions: "Blocks range from 1\" to 4\" in size"
    },
    {
        id: 8,
        name: "Geometric Block Set",
        price: 32.99,
        image: "imgs/block2.jpg",
        category: "block",
        description: "Educational geometric block set with 18 different shapes.",
        details: "Our geometric block set helps children learn about shapes, colors, and spatial relationships while they play. Includes 18 different shapes in a wooden storage box.",
        ageRange: "3+ years",
        materials: "Solid beech wood, water-based colors",
        dimensions: "Box size: 10\" × 8\" × 3\""
    },
    {
        id: 9,
        name: "Steam Locomotive",
        price: 42.99,
        image: "imgs/train3.jpg",
        category: "train",
        description: "Detailed wooden steam locomotive with moving parts.",
        details: "This detailed steam locomotive features moving wheels and a realistic design. Pairs perfectly with our wooden train tracks (sold separately).",
        ageRange: "4+ years",
        materials: "Cherry and maple woods",
        dimensions: "12\" × 3\" × 5\""
    },
    {
        id: 10,
        name: "Wooden Tugboat",
        price: 26.99,
        image: "imgs/boat2.jpg",
        category: "boat",
        description: "Charming wooden tugboat with working smokestack.",
        details: "Our wooden tugboat brings maritime charm to playtime. With a working smokestack and detailed design, it's perfect for imaginative water adventures.",
        ageRange: "3+ years",
        materials: "Pine wood with non-toxic finish",
        dimensions: "6\" × 3\" × 5\""
    }
];

// Customer reviews data
const reviews = [
    {
        name: "Will Smith",
        review: "The wooden train set is incredibly well-made! My son hasn't stopped playing with it since it arrived.",
        rating: 5
    },
    {
        name: "Paris Hilton",
        review: "Beautiful craftsmanship on the building blocks. Worth every penny for a toy that will last generations.",
        rating: 5
    },
    {
        name: "AJ & Big Justice",
        review: "The wooden plane is gorgeous but one of the wheels wasn't attached properly. Customer service was great at resolving the issue though.",
        rating: 4
    },
    {
        name: "IShowSpeed",
        review: "These toys remind me of the ones I had as a child. So glad to find a company still making them with such quality.",
        rating: 5
    },
    {
        name: "Kai Cenat",
        review: "My daughter loves her new wooden boat. It actually floats in the bathtub which is a big hit!",
        rating: 5
    }
];

// Function to display products
function displayProducts(productsToShow) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'col-md-6 col-lg-4 mb-4';
        
        const stars = "★".repeat(Math.floor(Math.random() * 2) + 4); // Random 4-5 stars
        
        productCard.innerHTML = `
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                    <div class="rating text-warning mb-2">${stars}</div>
                    <button class="btn btn-primary learn-more" data-id="${product.id}">Learn More</button>
                </div>
            </div>
        `;
        
        productContainer.appendChild(productCard);
    });
    
    // Add event listeners to Learn More buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            showProductDetails(productId);
        });
    });
}

// Function to show product details in modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const modalContent = document.getElementById('modal-content');
    modalContent.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h3>${product.name}</h3>
                <p class="price fs-4">$${product.price.toFixed(2)}</p>
                <p><strong>Description:</strong> ${product.details}</p>
                <p><strong>Age Range:</strong> ${product.ageRange}</p>
                <p><strong>Materials:</strong> ${product.materials}</p>
                <p><strong>Dimensions:</strong> ${product.dimensions}</p>
            </div>
        </div>
    `;
    
    document.getElementById('productModalLabel').textContent = product.name;
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    productModal.show();
}

// Function to display reviews
function displayReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    
    reviews.forEach(review => {
        const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
        
        const reviewCard = document.createElement('div');
        reviewCard.className = 'col-md-6 col-lg-4 mb-4';
        
        reviewCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <div class="rating text-warning mb-2">${stars}</div>
                    <p class="card-text">"${review.review}"</p>
                    <p class="text-end mb-0"><em>- ${review.name}</em></p>
                </div>
            </div>
        `;
        
        reviewsContainer.appendChild(reviewCard);
    });
}

// Filter products by category
function setupCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter button');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const category = this.getAttribute('data-category');
            let filteredProducts;
            
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(product => product.category === category);
            }
            
            displayProducts(filteredProducts);
        });
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    displayReviews();
    setupCategoryFilters();
});