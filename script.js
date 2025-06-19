
// This line indicates the start of product data section
// 'const' means we're creating a constant variable that can't be reassigned
// 'products' is an array (a collection of items) containing multiple product objects
const products = [
    {
        // Each product is an object with key-value pairs containing product information
        id: 1,                    // Unique identifier for the product
        name: "Wooden Train Set", // The name of the product
        price: 24.99,             // The price in dollars
        image: "imgs/train2.jpg", // File path to the product image
        description: "A classic wooden train that encourages imaginative play and motor skills development.", // Product description
        category: "trains",       // Category to group similar products
        featured: true            // Boolean (true/false) value indicating if this product should be featured
    },
    {
        id: 2,                        // Unique identifier for this product
        name: "Wooden Racing Car",    // Name of this product
        price: 19.99,                 // Price in dollars
        image: "imgs/car2.jpg",       // Path to the car image file
        description: "Sleek, sturdy wooden racing car with smooth-rolling wheels and child-safe finishes.", // Detailed description
        category: "cars",             // Product category
        featured: true                // This product is featured (shown prominently)
    },
    {
        id: 3,                        // Unique identifier for this product
        name: "Wooden Airplane",      // Name of this product
        price: 21.99,                 // Price in dollars
        image: "imgs/plane1.jpg",     // Path to the airplane image file
        description: "Watch imagination take flight with our beautifully crafted wooden airplane.", // Product description
        category: "planes",           // Product category
        featured: true                // This product is featured (shown prominently)
    },
    {
        id: 4,                        // Unique identifier for this product
        name: "Classic Block Set",    // Name of this product
        price: 34.99,                 // Price in dollars
        image: "imgs/block1.jpg",     // Path to the block set image file
        description: "Set of 24 colorful wooden blocks in various shapes for building and learning.", // Product description
        category: "blocks",           // Product category
        featured: false               // This product is not featured (false means it won't be shown in featured sections)
    },
    {
        id: 5,                        // Unique identifier for this product
        name: "Wooden Boat",          // Name of this product
        price: 18.99,                 // Price in dollars
        image: "imgs/boat1.jpg",      // Path to the boat image file
        description: "Charming wooden sailboat perfect for imaginative water play.", // Product description
        category: "boats",            // Product category
        featured: false               // This product is not featured
    }
]; // The closing square bracket and semicolon end the products array

// This comment indicates the start of the customer reviews section
// We're creating another constant array to store all customer reviews
const customerReviews = [
    {
        name: "Sarah",              // Customer's name
        review: "My son loves the wooden train set! The quality is outstanding and it's become his favorite toy.", // The actual review text
        rating: 5,                  // Rating out of 5 stars
        date: "May 10, 2025"        // Date when the review was submitted
    },
    {
        name: "Michael",            // Customer's name
        review: "The craftsmanship on these toys is incredible. We purchased the block set and it's both beautiful and durable.", // Review text
        rating: 5,                  // Perfect 5-star rating
        date: "April 23, 2025"      // Date when the review was submitted
    },
    {
        name: "Jennifer",           // Customer's name
        review: "The airplane is adorable and well-made. My only suggestion would be to add more color options.", // Review text
        rating: 4,                  // 4-star rating (not perfect but still very good)
        date: "June 2, 2025"        // Date when the review was submitted
    }
]; // The closing square bracket and semicolon end the customerReviews array

// This event listener waits for the entire HTML document to be fully loaded before running the code inside
document.addEventListener('DOMContentLoaded', function() {
    // This comment indicates we're setting up event listeners for product buttons
    // querySelectorAll finds all elements matching the CSS selector '.card .btn-primary'
    const productButtons = document.querySelectorAll('.card .btn-primary'); // Get all buttons with the class 'btn-primary' inside elements with class 'card'
    
    // The forEach method runs the provided function once for each button we found
    productButtons.forEach(button => {
        // For each button, we add a click event listener that runs when the button is clicked
        button.addEventListener('click', function(e) {
            // 'this' refers to the clicked button
            // closest() finds the nearest ancestor element that matches the selector
            const cardBody = this.closest('.card-body'); // Find the parent card-body element containing this button
            
            // querySelector finds the first element within cardBody that matches the selector
            const productTitle = cardBody.querySelector('.card-title').textContent; // Get the text content of the card title
            
            // Display an alert message showing which product the user clicked on
            alert(`You're interested in the ${productTitle}. More details coming soon!`);
        });
    });

    // This comment indicates we're now setting up the newsletter subscribe button functionality
    // querySelector finds the first element matching the CSS selector 'footer .input-group .btn'
    const subscribeBtn = document.querySelector('footer .input-group .btn'); // Find the subscribe button in the footer
    
    // Check if the subscribe button exists on the current page
    if (subscribeBtn) {
        // Add a click event listener to the subscribe button
        subscribeBtn.addEventListener('click', function() {
            // previousElementSibling gets the element immediately before the current element (the email input field)
            const emailInput = this.previousElementSibling; // Get the email input field
            
            // Check if the email input has a value (is not empty)
            if (emailInput.value) {
                // If there's a value, show a success message
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = ''; // Clear the input field after successful subscription
            } else {
                // If the input is empty, show an error message
                alert('Please enter your email address.');
            }
        });
    }

    // This comment indicates we're setting up smooth scrolling for anchor links (links that point to sections within the page)
    // Find all anchor elements (<a>) whose href attribute starts with "#" (internal page links)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        // For each such anchor, add a click event listener
        anchor.addEventListener('click', function (e) {
            // Prevent the default behavior of jumping immediately to the link target
            e.preventDefault();
            
            // Get the value of the href attribute (the ID of the target element)
            const targetId = this.getAttribute('href');
            
            // If the href is just "#" (empty link), do nothing and exit the function
            if (targetId === '#') return;
            
            // Find the element with the matching ID and scroll to it smoothly
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth' // This makes the scroll animation smooth instead of instant
            });
        });
    });
}); // This closes the DOMContentLoaded event listener function that we opened at the beginning
