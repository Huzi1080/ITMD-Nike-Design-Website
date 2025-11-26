// CHANGE MAIN IMAGE FROM THUMBNAILS
const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});

// COLOR OPTION SWITCHING
const colorThumbs = document.querySelectorAll(".color-thumb");

colorThumbs.forEach(color => {
    color.addEventListener("click", () => {
        const newMain = color.getAttribute("data-main");
        mainImage.src = newMain;
    });
});

// ADD TO CART
document.getElementById("addToCart").addEventListener("click", () => {
    alert("Added to cart!");
});

// SCROLL ANIMATIONS
const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const position = card.getBoundingClientRect().top;
        if (position < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});

// SIZE CHART MODAL
const sizeChartModal = document.getElementById("sizeChartModal");
const openBtn = document.getElementById("openSizeChart");
const closeBtn = document.getElementById("closeSizeChart");

openBtn.addEventListener("click", () => {
    sizeChartModal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    sizeChartModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === sizeChartModal) {
        sizeChartModal.style.display = "none";
    }
});
