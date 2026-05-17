const serviceCards = document.querySelectorAll(".service-card");
const selectedService = document.getElementById("selectedService");
const serviceMessage = document.getElementById("serviceMessage");

const messages = {
    "Housing Assistance":
        "We can help connect you to housing support, rental assistance, and local housing programs.",

    "Mental Health Support":
        "We can help connect you with mental health counselors, crisis support, and wellness services.",

    "Food Assistance":
        "We can help you find nearby food shelves, meal programs, and emergency food resources.",

    "Emergency Shelter":
        "We can help connect you with emergency shelters and overnight support services."
};

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
        const service = card.dataset.service;

        serviceCards.forEach((item) => {
            item.classList.remove("active");
        });

        card.classList.add("active");

        selectedService.textContent = service;
        serviceMessage.textContent = messages[service];
    });
});
