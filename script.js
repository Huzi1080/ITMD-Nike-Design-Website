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

    const sizeChartModal = document.getElementById("sizeChartModal");
const openBtn = document.getElementById("openSizeChart");
const closeBtn = document.getElementById("closeSizeChart");

openBtn.addEventListener("click", () => {
  sizeChartModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sizeChartModal.style.display = "none";
});

// Close when clicking outside the box
window.addEventListener("click", (event) => {
  if (event.target === sizeChartModal) {
    sizeChartModal.style.display = "none";
  }
});

});

