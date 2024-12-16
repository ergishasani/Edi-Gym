document.addEventListener("DOMContentLoaded", function () {
    const boysBtn = document.getElementById("boys-btn");
    const girlsBtn = document.getElementById("girls-btn");
    const carousel = document.getElementById("carousel");

    boysBtn.addEventListener("click", () => {
        carousel.style.transform = "translateX(0%)";
        boysBtn.classList.add("active");
        girlsBtn.classList.remove("active");
    });

    girlsBtn.addEventListener("click", () => {
        carousel.style.transform = "translateX(-100%)";
        girlsBtn.classList.add("active");
        boysBtn.classList.remove("active");
    });
});
