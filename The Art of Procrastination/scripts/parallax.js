document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let parallaxBg = document.querySelector(".parallax-bg");
        
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
    });
});
