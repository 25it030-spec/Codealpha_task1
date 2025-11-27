let currentIndex = 0;
let images = [];

window.onload = () => {
    images = Array.from(document.querySelectorAll(".gallery img"));
};

function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
    currentIndex = images.findIndex(img => img.src === src);
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeImage(step) {
    currentIndex = (currentIndex + step + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

/* IMAGE FILTER FUNCTION */
function filterImages(category) {
    let imgs = document.querySelectorAll(".image");

    imgs.forEach(img => {
        if (category === "all" || img.classList.contains(category)) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });

    document.querySelectorAll(".btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}
