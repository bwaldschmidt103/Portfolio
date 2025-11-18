const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const scrollContent = document.querySelector('.scroll-content'); // Target the container

// Check if elements exist before adding event listeners
if (leftArrow && rightArrow && scrollContent) {
    leftArrow.addEventListener('click', () => {
        scrollContent.scrollBy({
            left: -360, // Matches the new card width for consistent scrolling
            behavior: 'smooth',
        });
    });

    rightArrow.addEventListener('click', () => {
        scrollContent.scrollBy({
            left: 360, // Matches the new card width for consistent scrolling
            behavior: 'smooth',
        });
    });
}

const crystals = [
    {
        name: "Healing Energy",
        benefit: "A powerful force to rejuvenate the soul and promote overall well-being.",
        color: "#00FA9A", // Bright spring green
        image: "../images/healing-energy.png", // Replace with actual image path
    },
    {
        name: "Stress Relief",
        benefit: "Provides calming energy that reduces tension and restores balance.",
        color: "#87CEEB", // Light blue for serenity
        image: "../images/stress-relief.png", // Replace with actual image path
    },
    {
        name: "Spiritual Growth",
        benefit: "Fosters inner awareness and connection with higher states of consciousness.",
        color: "#6A5ACD", // Deep blue-violet for spiritual growth
        image: "../images/spiritual-growth.png", // Replace with actual image path
    },
    {
        name: "Amethyst",
        benefit: "Known for its calming properties, Amethyst helps relieve stress and enhances clarity of mind.",
        color: "#9966CC", // A soothing purple shade
        image: "../images/amethyst.png", // Replace with actual image path
    },
    {
        name: "Rose Quartz",
        benefit: "Often called the 'love stone,' Rose Quartz promotes self-love and harmony in relationships.",
        color: "#FFB6C1", // Soft pink tone
        image: "../images/rose-quartz.png", // Replace with actual image path
    },
    {
        name: "Clear Quartz",
        benefit: "A versatile crystal that amplifies energy, focus, and clarity, supporting any intention.",
        color: "#F5F5F5", // Neutral white/gray
        image: "../images/clear-quartz.png", // Replace with actual image path
    },
    {
        name: "Lapis Lazuli",
        benefit: "This vibrant blue crystal unlocks higher consciousness and strengthens intuition.",
        color: "#26619C", // Deep blue
        image: "../images/lapis-lazuli.png", // Replace with actual image path
    },
    {
        name: "Citrine",
        benefit: "Associated with success and positivity, Citrine inspires confidence and creativity.",
        color: "#FFD700", // Warm golden yellow
        image: "../images/citrine.png", // Replace with actual image path
    }
];

// Function to calculate text contrast
function getTextColor(backgroundColor) {
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance > 128 ? "#000000" : "#ffffff"; // Black for light backgrounds, white for dark backgrounds
}

// Clear any existing content in the scroll container
scrollContent.innerHTML = "";

// Generate and append cards
crystals.forEach((crystal) => {
    const card = document.createElement('div');
    card.classList.add('crystal-card');

    // Apply dynamic styles
    card.style.backgroundColor = crystal.color;
    card.style.color = getTextColor(crystal.color);
    
    // Apply dynamic text shadow for readability
    card.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.6)"; // Adds a dark shadow to text

    card.innerHTML = `
        <img src="${crystal.image}" alt="${crystal.name}" class="crystal-image">
        <h3>${crystal.name}</h3>
        <p>${crystal.benefit}</p>
    `;

    scrollContent.appendChild(card);
});

// Add an invisible spacer at the end to create buffer
const spacer = document.createElement('div');
spacer.style.width = "360px"; // Matches the width of a card to ensure proper spacing
scrollContent.appendChild(spacer);
