// This comment indicates that we're defining the products data for the gallery page
// We create a constant array named 'products' that will hold all our product information
const products = [
    {
        id: 1,                                 // Unique identifier for this product
        name: "Classic Wooden Train",          // Product name
        price: 24.99,                          // Price in dollars
        image: "imgs/train1.jpg",              // Path to the product image
        category: "train",                     // Product category for filtering
        description: "Handcrafted wooden train with movable wheels and colorful accents.", // Short description
        details: "This classic wooden train is made of sustainable birch wood and finished with non-toxic paint. Perfect for children ages 3+. Each train is handcrafted with care in our small workshop.", // Longer, more detailed description
        ageRange: "3-8 years",                 // Recommended age range for the toy
        materials: "Sustainable birch wood, non-toxic paint", // Materials used in the product
        dimensions: "8\" × 2.5\" × 3\""        // Product dimensions (the \" is an escaped quote mark)
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

// This comment introduces the customer reviews section
// We create a constant array named 'reviews' to store all customer feedback
const reviews = [
    {
        name: "Will Smith",        // Customer's name
        review: "The wooden train set is incredibly well-made! My son hasn't stopped playing with it since it arrived.", // The review text
        rating: 5                  // Rating out of 5 stars (5 is the highest rating)
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

// This function will display products in the gallery
// It takes one parameter: productsToShow (the array of products to display)
function displayProducts(productsToShow) {
    // Get the HTML element with id 'product-container' where we'll put all the products
    const productContainer = document.getElementById('product-container');
    
    // Clear any existing content in the container by setting innerHTML to an empty string
    productContainer.innerHTML = '';
    
    // Loop through each product in the productsToShow array
    productsToShow.forEach(product => {
        // Create a new div element for each product card
        const productCard = document.createElement('div');
        
        // Set CSS classes for the card for proper Bootstrap layout
        // col-md-6: take up half the width on medium screens
        // col-lg-4: take up one-third of the width on large screens
        // mb-4: add margin at the bottom (spacing between cards)
        productCard.className = 'col-md-6 col-lg-4 mb-4';
        
        // Generate random star rating (either 4 or 5 stars)
        // Math.random() * 2 gives a value between 0 and 2
        // Math.floor() rounds down to the nearest integer (0 or 1)
        // Adding 4 gives us either 4 or 5
        // repeat() creates a string with the ★ character repeated that many times
        const stars = "★".repeat(Math.floor(Math.random() * 2) + 4); // Random 4-5 stars
        
        // Set the inner HTML of the productCard with a template literal (backtick string)
        // Template literals allow us to embed expressions using ${expression}
        productCard.innerHTML = `
            <div class="card product-card">
                <!-- Product image: src attribute is set to the product's image path -->
                <!-- alt attribute provides text description for accessibility -->
                <!-- style attribute sets a fixed height and cover object-fit to ensure consistent card sizes -->
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="height: 200px; object-fit: cover;">
                
                <div class="card-body">
                    <!-- Product name in a heading element -->
                    <h5 class="card-title">${product.name}</h5>
                    
                    <!-- Product description paragraph -->
                    <p class="card-text">${product.description}</p>
                    
                    <!-- Product price, with toFixed(2) ensuring it shows 2 decimal places -->
                    <p class="price">$${product.price.toFixed(2)}</p>
                    
                    <!-- Star rating display, using the random stars we generated earlier -->
                    <div class="rating text-warning mb-2">${stars}</div>
                    
                    <!-- "Learn More" button with data-id attribute storing the product ID -->
                    <!-- This ID will be used to identify which product was clicked -->
                    <button class="btn btn-primary learn-more" data-id="${product.id}">Learn More</button>
                </div>
            </div>
        `;
        
        // Add the product card we just created to the product container
        // appendChild adds an element as the last child of another element
        productContainer.appendChild(productCard);
    });
    
    // Now that all products are displayed, we need to add click functionality to the "Learn More" buttons
    // First, find all buttons with the 'learn-more' class using querySelectorAll
    document.querySelectorAll('.learn-more').forEach(button => {
        // For each button, add a click event listener
        button.addEventListener('click', function() {
            // Get the product ID from the button's data-id attribute
            // parseInt converts the string attribute value to an integer
            const productId = parseInt(this.getAttribute('data-id'));
            
            // Call the showProductDetails function with the product ID to display more information
            showProductDetails(productId);
        });
    });
}

// This function displays detailed product information in a modal popup
// It takes one parameter: productId (the unique identifier of the product to display)
function showProductDetails(productId) {
    // Find the product in our products array that matches the given productId
    // The find method returns the first element that satisfies the condition in the callback function
    const product = products.find(p => p.id === productId);
    
    // If no matching product was found, exit the function early
    if (!product) return;
    
    // Get the modal content element where we'll put the product details
    const modalContent = document.getElementById('modal-content');
    
    // Set the inner HTML of the modal content with product details using a template literal
    modalContent.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <!-- Product image on the left side of the modal -->
                <!-- img-fluid makes the image responsive (it will resize with the container) -->
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <!-- Product information on the right side of the modal -->
                <!-- Product name in a heading -->
                <h3>${product.name}</h3>
                
                <!-- Price with fs-4 class to make it larger text -->
                <!-- toFixed(2) ensures the price always shows 2 decimal places -->
                <p class="price fs-4">$${product.price.toFixed(2)}</p>
                
                <!-- Detailed product description -->
                <p><strong>Description:</strong> ${product.details}</p>
                
                <!-- Age range recommendation -->
                <p><strong>Age Range:</strong> ${product.ageRange}</p>
                
                <!-- Materials used in making the product -->
                <p><strong>Materials:</strong> ${product.materials}</p>
                
                <!-- Product dimensions -->
                <p><strong>Dimensions:</strong> ${product.dimensions}</p>
            </div>
        </div>
    `;
    
    // Set the modal title to the product name
    document.getElementById('productModalLabel').textContent = product.name;
    
    // Create a new Bootstrap Modal object using the productModal element
    const productModal = new bootstrap.Modal(document.getElementById('productModal'));
    
    // Display the modal to the user
    productModal.show();
}

// This function displays customer reviews on the page
function displayReviews() {
    // Get the container element where we'll put all the reviews
    const reviewsContainer = document.getElementById('reviews-container');
    
    // Loop through each review in the reviews array
    reviews.forEach(review => {
        // Generate the star rating display
        // First part creates filled stars (★) based on the rating
        // Second part creates empty stars (☆) to always show 5 stars total
        const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
        
        // Create a new div element for the review card
        const reviewCard = document.createElement('div');
        
        // Set CSS classes for responsive layout
        // col-md-6: take up half the width on medium screens
        // col-lg-4: take up one-third of the width on large screens
        // mb-4: add margin at the bottom for spacing
        reviewCard.className = 'col-md-6 col-lg-4 mb-4';
        
        // Set the inner HTML of the reviewCard with a template literal
        reviewCard.innerHTML = `
            <div class="card h-100">
                <div class="card-body">
                    <!-- Star rating display in yellow (text-warning) -->
                    <div class="rating text-warning mb-2">${stars}</div>
                    
                    <!-- The review text in quotes -->
                    <p class="card-text">"${review.review}"</p>
                    
                    <!-- Reviewer name aligned to the right (text-end) -->
                    <p class="text-end mb-0"><em>- ${review.name}</em></p>
                </div>
            </div>
        `;
        
        // Add the review card to the reviews container
        reviewsContainer.appendChild(reviewCard);
    });
}

// This function sets up the filtering system to show products by category
function setupCategoryFilters() {
    // Get all the filter buttons in the category filter section
    const filterButtons = document.querySelectorAll('.category-filter button');
    
    // Add click event listeners to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // First update which button appears active (highlighted)
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add 'active' class to the clicked button ('this' refers to the clicked button)
            this.classList.add('active');
            
            // Get the category value from the button's data-category attribute
            const category = this.getAttribute('data-category');
            
            // Declare a variable to hold the filtered products
            let filteredProducts;
            
            // If category is 'all', show all products
            if (category === 'all') {
                filteredProducts = products;
            } else {
                // Otherwise, filter the products to only show those matching the selected category
                // The filter method creates a new array with only the elements that pass the test
                filteredProducts = products.filter(product => product.category === category);
            }
            
            // Call the displayProducts function with our filtered products to update the display
            displayProducts(filteredProducts);
        });
    });
}

// This code initializes the page when it's fully loaded
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed
document.addEventListener('DOMContentLoaded', function() {
    // Display all products when the page loads
    displayProducts(products);
    
    // Display all customer reviews
    displayReviews();
    
    // Set up the category filtering system
    setupCategoryFilters();
});