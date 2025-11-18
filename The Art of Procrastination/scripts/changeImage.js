document.addEventListener("DOMContentLoaded", function () {
    let thumbnails = document.querySelectorAll(".thumbnails img");
    let largeImage = document.getElementById("largeImage");

    // 🔹 Ensure the initial large image starts with a border
    if (largeImage) {
        largeImage.style.border = "5px solid #ccc"; /* 🔹 Matches clicked images */
        largeImage.style.borderRadius = "10px"; /* 🔹 Keeps consistency */
    }

    // 🔹 Preload images once when the page loads
    thumbnails.forEach(img => {
        let preloadedImage = new Image();
        preloadedImage.src = img.src;
    });

    // 🔹 Set first thumbnail as active for better UX
    if (thumbnails.length > 0) {
        thumbnails[0].classList.add("active");
    }

    document.addEventListener("keydown", function(event) {
        let activeIndex = Array.from(thumbnails).findIndex(img => img.classList.contains("active"));

        if (event.key === "ArrowRight" && activeIndex < thumbnails.length - 1) {
            changeImage(thumbnails[activeIndex + 1]);
        } else if (event.key === "ArrowLeft" && activeIndex > 0) {
            changeImage(thumbnails[activeIndex - 1]);
        }
    });
});

function changeImage(thumbnail) {
    let largeImage = document.getElementById("largeImage");
    let caption = document.getElementById("caption");

    if (largeImage && caption) {
        largeImage.style.opacity = 0;

        setTimeout(() => {
            largeImage.src = thumbnail.src;
            largeImage.style.width = "500px"; // 🔹 Forces a consistent width
            largeImage.style.height = "300px"; // 🔹 Prevents unexpected resizing
            caption.textContent = thumbnail.alt;

            setTimeout(() => {
                largeImage.style.opacity = 1;
            }, 150); // Small delay for smooth fade-in
        }, 300);

        // 🔹 Remove 'active' class from all thumbnails
        document.querySelectorAll(".thumbnails img").forEach(img => img.classList.remove("active"));

        // 🔹 Add 'active' class to clicked thumbnail
        thumbnail.classList.add("active");
    } else {
        console.error("Large image or caption element not found!");
    }
}
