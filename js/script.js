document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in, .slide-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
    // 🎯 Smooth Scroll (Optional: If you want smooth scrolling for navigation)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                let target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70, // Adjust offset for navbar height
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // 🌟 Fade-in Animations on Scroll
    const fadeElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => observer.observe(element));

    // 📸 Image Carousel for Projects
    const galleries = document.querySelectorAll(".project-gallery");

    galleries.forEach(gallery => {
        let images = gallery.querySelectorAll("img");
        let currentIndex = 0;

        function showNextImage() {
            images[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % images.length;
            images[currentIndex].classList.add("active");
        }

        setInterval(showNextImage, 3000); // Change image every 3 seconds
    });
});
