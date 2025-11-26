// 1. Thumbnail Click → Change Main Image
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});

// 2. Add to Cart Button Feedback
document.getElementById("addToCart").addEventListener("click", () => {
    alert("Added to cart!");
});

// 3. Scroll Fade-In Animations for Feature Cards
const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

