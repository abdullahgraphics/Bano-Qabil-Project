// ==========================================
// 1. JAVASCRIPT BASICS & CONSOLE LOGS
// ==========================================
console.log("Welcome to Abdullah Graphics Official Website!");

// ==========================================
// 2. VARIABLES & DATA TYPES
// ==========================================
// String Data Type
let designerName = "Abdullah";
const brandName = "Abdullah Graphics";

// Number Data Type
let totalProjects = 21;
let yearsOfExperience = 3;

// Boolean Data Type
let isAvailableForFreelance = true;

// Array (Data Type)
let offeredServices = [
    "Logo Design",
    "Flyer Design",
    "Business Card Design",
    "Social Media Graphics"
];

// Object (Data Type)
let contactDetails = {
    email: "abdullahgraphics793@gmail.com",
    phone: "+92 321 2620924",
    location: "Pakistan"
};

// Log variables to console for testing
console.log("Brand:", brandName);
console.log("Services Offered:", offeredServices);
console.log("Contact Details:", contactDetails);

// ==========================================
// 3. OPERATORS
// ==========================================
// Arithmetic Operators
let completedLogos = 10;
let completedFlyers = 5;
let completedCards = 6;
let calculatedTotal = completedLogos + completedFlyers + completedCards; // Addition

// Comparison & Logical Operators
let hasEnoughProjects = calculatedTotal >= 20; // Boolean result
let isEligibleForDiscount = isAvailableForFreelance && (yearsOfExperience >= 2);

console.log("Calculated Total Projects:", calculatedTotal);
console.log("Has 20+ projects:", hasEnoughProjects);

// ==========================================
// 4. IF / ELSE STATEMENTS
// ==========================================
// Availability status check
function checkAvailabilityStatus() {
    let statusTextElement = document.querySelector(".availability");
    
    if (isAvailableForFreelance) {
        console.log("Status: Currently accepting new freelance projects.");
    } else {
        console.log("Status: Currently busy with existing client work.");
        if (statusTextElement) {
            statusTextElement.style.opacity = "0.6";
        }
    }
}

// Discount calculator based on order amount
function calculateClientQuote(projectType, basePrice) {
    let finalPrice = basePrice;

    if (projectType === "Branding Package") {
        finalPrice = basePrice - (basePrice * 0.15); // 15% discount
        console.log(`Special Offer applied for ${projectType}! Final Price: PKR ${finalPrice}`);
    } else if (projectType === "Logo Design") {
        finalPrice = basePrice - (basePrice * 0.05); // 5% discount
        console.log(`Standard Offer applied for ${projectType}! Final Price: PKR ${finalPrice}`);
    } else {
        console.log(`Regular Price for ${projectType}: PKR ${finalPrice}`);
    }

    return finalPrice;
}

// Run test function
calculateClientQuote("Branding Package", 10000);

// ==========================================
// 5. LOOPS (FOR LOOP & FOR EACH)
// ==========================================
// Loop 1: For Loop - Printing services list in console
console.log("--- Services List (using For Loop) ---");
for (let i = 0; i < offeredServices.length; i++) {
    console.log(`Service ${i + 1}: ${offeredServices[i]}`);
}

// Loop 2: Dynamic console output for portfolio item counts
console.log("--- Portfolio Highlights (using For Loop) ---");
for (let count = 1; count <= 3; count++) {
    console.log(`Highlighting Top Feature Project #${count}`);
}

// Initializing page setup when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    checkAvailabilityStatus();
});