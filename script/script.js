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



// Smooth scroll for same-page navigation
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior

        const targetId = this.getAttribute('href').substring(1); // Get the ID without the '#'
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smooth scroll for navigation between pages
window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 0); // Wait for the page to load before scrolling
        }
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealSection, {
        threshold: 0.1,
    });

    sections.forEach(section => observer.observe(section));
});
