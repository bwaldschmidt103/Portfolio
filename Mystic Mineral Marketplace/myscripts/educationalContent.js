// Educational Content "Read More" Functionality
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".read-more-btn");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-target");
        const content = document.getElementById(target);

        if (content.classList.contains("hidden-content")) {
          content.classList.remove("hidden-content");
          content.classList.add("visible-content");
          button.textContent = "Read Less"; // Change button text
        } else {
          content.classList.remove("visible-content");
          content.classList.add("hidden-content");
          button.textContent = "Read More"; // Reset button text
        }
      });
    });
});
