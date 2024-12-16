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

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const toggleIcon = item.querySelector(".faq-toggle");

        question.addEventListener("click", () => {
            // Close other open FAQs
            faqItems.forEach((faq) => {
                if (faq !== item && faq.classList.contains("active")) {
                    faq.classList.remove("active");
                    faq.querySelector(".faq-answer").style.maxHeight = null;
                    faq.querySelector(".faq-toggle").textContent = "▼";
                }
            });

            // Toggle current FAQ
            if (item.classList.contains("active")) {
                item.classList.remove("active");
                answer.style.maxHeight = null; // Collapse the answer
                toggleIcon.textContent = "▼";
            } else {
                item.classList.add("active");
                answer.style.maxHeight = answer.scrollHeight + "px"; // Expand the answer
                toggleIcon.textContent = "▲";
            }
        });
    });
});

