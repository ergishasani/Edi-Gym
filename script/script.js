
    document.addEventListener("DOMContentLoaded", () => {
        const observerOptions = {
            threshold: 0.2, // Trigger when 20% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains("slide-left")) {
                        entry.target.classList.add("show-left");
                    } else if (entry.target.classList.contains("slide-right")) {
                        entry.target.classList.add("show-right");
                    } else {
                        entry.target.classList.add("show");
                    }
                    observer.unobserve(entry.target); // Stop observing once shown
                }
            });
        }, observerOptions);

        // Add observer to elements
        document.querySelectorAll(".hidden, .slide-left, .slide-right").forEach(el => {
            observer.observe(el);
        });
    });
