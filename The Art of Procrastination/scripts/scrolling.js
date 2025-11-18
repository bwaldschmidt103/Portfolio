document.addEventListener("DOMContentLoaded", function () {
    let info = document.getElementById("info");

    if (info) {
        let value = window.scrollY;
        info.style.transform = `translateX(${value * 0.3}px) translateY(${value * 0.3}px)`;
    }
});

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    if (info) {
        info.style.transform = "none"; /* ✅ Temporarily disables movement */

    }
});
