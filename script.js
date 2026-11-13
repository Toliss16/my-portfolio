//--- 1.Dynamic Greeting according with Time ---

document.addEventListener("DOMContentLoaded", () => {
    const heroTitle = document.querySelector("#hero h1");
    const currentHour = new Date().getHours();
    let greeting = "Welcome!";

    if (currentHour < 12) {
        greeting = "Good Morning! Welcome";
    } else if (currentHour < 18) {
        greeting = "Good Evening! Welcome";
    } else {
        greeting = "Good Evening! Welcome";
    }

    //Dynamic Personal touch in the title
    console.log('Current time: ${currentHour}:00 - Active dynamic greeting');
});

// --- 2. Filter Project Mode ---

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.button = filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        //Remove the class active from all the buttons and we add it in the clicked ones
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || cardCategory === filterValue) {
                card.computedStyleMap.display = "block"; // Card Appearance
            } else {
                card.computedStyleMap.display = "none"; //Card Disapperarance
            }
        });
    });
});


// --- 3. Responsive mobile menu ---

const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

