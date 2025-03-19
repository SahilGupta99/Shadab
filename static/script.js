
// Load navbar dynamically
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;

        // Ensure the menu button works after loading
        const menuBtn = document.getElementById("menuBtn");
        const mobileMenu = document.getElementById("mobileMenu");

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener("click", () => {
                mobileMenu.classList.toggle("hidden");
            });
        }
    });


// Load footer
fetch("footer.html")
    .then(response => response.text())
    .then(data => document.getElementById("footer-container").innerHTML = data);

fetch("navbar.html")
    .then(response => response.text())
    .then(data => document.getElementById("contact-container").innerHTML = data);

// #DEV: code for slide careousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplay: true,
        mouseDrag: false,
        animateOut: 'slideOutUp',
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            }
        }
    });
});
//#DEV: Code for counter       
function startCounter(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counters = document.querySelectorAll(".counter");
            counters.forEach(counter => {
                const target = +counter.getAttribute("data-target");
                let count = 0;
                const increment = target / 100;

                const updateCount = () => {
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.floor(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        counter.innerText = target;
                    }
                };

                updateCount();
            });

            observer.disconnect();
        }
    });
}
// DEV: code for cards
document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        {
            img: "/static/image.jpg",
            title: '"A" Frame',
            description: "One of the most popular designs in the world, our A shape is popular amongst the resorts & farm houses.",
        },
        {
            img: "/static/image.jpg",
            title: "Alpine Villa",
            description: "Something different and dynamic design with options of 1 & 2 BHK suitable for farm houses, holiday homes, etc.",
        },
        {
            img: "/static/image.jpg",
            title: "Barn House",
            description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
        },
        {
            img: "/static/image.jpg",
            title: '"A" Frame',
            description: "One of the most popular designs in the world, our A shape is popular amongst the resorts & farm houses.",
        },
        {
            img: "/static/image.jpg",
            title: "Alpine Villa",
            description: "Something different and dynamic design with options of 1 & 2 BHK suitable for farm houses, holiday homes, etc.",
        },
        {
            img: "/static/image.jpg",
            title: "Barn House",
            description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
        },
        {
            img: "/static/image.jpg",
            title: "Barn House",
            description: "Typical barn house concept with option of spacious 1/2/3 BHK suitable for farm houses, holiday homes, resorts etc.",
        }

    ];

    const cardContainer = document.getElementById("card-container");
    cardContainer.classList.add(
        "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-3",
        "gap-4", "md:gap-4",
        "max-w-full", "mx-auto", "p-4"
    );

    cardData.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add(
            "bg-white", "shadow-lg", "rounded-lg", "overflow-hidden",
            "w-full", "p-1", "md:p-3",  // Increased padding
            "flex", "flex-col", "min-h-[400px]", "md:min-h-[200px]" // Increased height
        );

        cardElement.innerHTML = `
            <img src="${card.img}" alt="${card.title}" class="w-90 h-90 object-cover rounded-md">
            <div class="p-3 flex-grow">
                <h2 class="text-xl md:text-2xl font-bold mb-1">${card.title}</h2>
                <p class="text-sm md:text-lg text-gray-700">${card.description}</p>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
});


//    DEV: code for scrollbar indicator 
document.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = Math.round((scrollTop / scrollHeight) * 100);

    const progressIndicator = document.getElementById("progressIndicator");
    const progressText = document.getElementById("progressText");
    const progressCircle = document.getElementById("progressCircle");

    // Show indicator when scrolling starts
    if (scrollTop > 50) {
        progressIndicator.classList.add("show");
    } else {
        progressIndicator.classList.remove("show");
    }

    // Change text to arrow at 100%
    if (scrollPercentage === 100) {
        progressText.innerHTML = '<i class="fa-solid fa-arrow-up-long arrow"></i>';
    } else {
        progressText.textContent = scrollPercentage + "%";
    }

    // Update progress bar
    const totalLength = 163.36;
    const offset = totalLength - (scrollPercentage / 100) * totalLength;
    progressCircle.style.strokeDashoffset = offset;
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
// ########################################################

const observer = new IntersectionObserver(startCounter, { threshold: 0.5 });
observer.observe(document.querySelector(".bg-black"));


// #DEV: code for skill bar
// document.addEventListener("DOMContentLoaded", function () {
//     const skillBars = document.querySelectorAll(".skill-bar");
//     const section = document.querySelector("#skills-section"); // Ensure this matches your section's ID

//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     skillBars.forEach(bar => {
//                         const width = bar.getAttribute("data-width");
//                         bar.style.width = width + "%";
//                         bar.style.transition = "width 2s ease-in-out";
//                     });
//                     observer.unobserve(section); // Ensures it triggers only once
//                 }
//             });
//         },
//         { threshold: 0.3 } // Adjust the threshold for triggering earlier/later
//     );

//     if (section) {
//         observer.observe(section);
//     }
// });
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-bar");
    const section = document.querySelector("#skills-section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillBars.forEach(bar => {
                        const width = bar.getAttribute("data-width");
                        bar.style.width = width + "%";
                        bar.style.transition = "width 2s ease-in-out";

                        // Find the number element next to the skill bar
                        const percentageSpan = bar.parentElement.previousElementSibling.querySelector(".percentage-count");

                        // Start counting animation
                        animateCount(percentageSpan, width);
                    });
                    observer.unobserve(section); // Stop observing after first animation
                }
            });
        },
        { threshold: 0.3 }
    );

    if (section) {
        observer.observe(section);
    }
});

// Function to animate the counter
function animateCount(element, targetValue) {
    let start = 0;
    let end = parseInt(targetValue);
    let duration = 2000; // 2 seconds
    let increment = Math.ceil(end / (duration / 20)); // Calculate step increment

    let timer = setInterval(() => {
        start += increment;
        if (start > end) start = end;
        element.textContent = start + "%";
        if (start >= end) {
            clearInterval(timer);
        }
    }, 20); // Update every 20ms for a smooth effect
}

// #DEV: code for review section
var swiper = new Swiper(".testimonial-slider", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: "auto", // Adjust dynamically based on card width
    spaceBetween: 20,
    slidesOffsetBefore: 0, // Ensure no extra space before the first slide
    slidesOffsetAfter: 0, // Ensure no extra space after the last slide
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 20
        }
    }
});