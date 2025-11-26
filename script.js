const mainImage = document.getElementById("mainImage");
const thumbnails = document.querySelectorAll(".thumb");

thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
        mainImage.src = thumb.src;
    });
});

document.getElementById("addToCart").addEventListener("click", () => {
    alert("Added to cart!");
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

window.addEventListener("click", (event) => {
    if (event.target === sizeChartModal) {
        sizeChartModal.style.display = "none";
    }
});

