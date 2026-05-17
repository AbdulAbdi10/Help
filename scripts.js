document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    const selectedService = document.getElementById("selectedService");
    const serviceMessage = document.getElementById("serviceMessage");
    const resultBox = document.querySelector(".result-box");

    const mockServices = {
        "Housing Assistance": [
            {
                name: "Community Housing Center",
                address: "1234 Central Ave NE, Minneapolis, MN",
                phone: "(612) 555-1010",
                hours: "Mon - Fri | 8:00 AM - 5:00 PM"
            },
            {
                name: "Affordable Living Support",
                address: "2450 University Ave, Minneapolis, MN",
                phone: "(612) 555-2020",
                hours: "Open Daily | 9:00 AM - 6:00 PM"
            }
        ],

        "Mental Health Support": [
            {
                name: "Hope Wellness Center",
                address: "4500 Hennepin Ave, Minneapolis, MN",
                phone: "(612) 555-3030",
                hours: "24/7 Crisis Support"
            },
            {
                name: "Community Mental Health Services",
                address: "789 Franklin Ave, Minneapolis, MN",
                phone: "(612) 555-4040",
                hours: "Mon - Sat | 8:00 AM - 8:00 PM"
            }
        ],

        "Food Assistance": [
            {
                name: "Northside Food Shelf",
                address: "550 Broadway St NE, Minneapolis, MN",
                phone: "(612) 555-5050",
                hours: "Mon - Fri | 10:00 AM - 4:00 PM"
            },
            {
                name: "Community Meal Program",
                address: "890 Lake Street, Minneapolis, MN",
                phone: "(612) 555-6060",
                hours: "Dinner Served Daily | 6:00 PM"
            }
        ],

        "Emergency Shelter": [
            {
                name: "Safe Night Shelter",
                address: "300 Hope Ave, Minneapolis, MN",
                phone: "(612) 555-7070",
                hours: "Open Tonight | 7:00 PM - 7:00 AM"
            },
            {
                name: "Family Emergency Housing",
                address: "710 Care Street, Minneapolis, MN",
                phone: "(612) 555-8080",
                hours: "Call For Availability"
            }
        ]
    };

    const messages = {
        "Housing Assistance": "Here are housing support resources near you.",
        "Mental Health Support": "Here are mental health support resources near you.",
        "Food Assistance": "Here are food assistance resources near you.",
        "Emergency Shelter": "Here are emergency shelter resources near you."
    };

    serviceCards.forEach(function (card) {
        card.addEventListener("click", function () {
            const service = card.getAttribute("data-service");

            serviceCards.forEach(function (item) {
                item.classList.remove("active");
            });

            card.classList.add("active");

            selectedService.textContent = service;
            serviceMessage.textContent = messages[service];

            const oldResults = document.getElementById("service-results");

            if (oldResults) {
                oldResults.remove();
            }

            const resultsContainer = document.createElement("div");
            resultsContainer.id = "service-results";

            mockServices[service].forEach(function (item) {
                const resultCard = document.createElement("div");
                resultCard.className = "result-card";

                resultCard.innerHTML = `
                    <h4>${item.name}</h4>
                    <p><strong>Address:</strong> ${item.address}</p>
                    <p><strong>Phone:</strong> ${item.phone}</p>
                    <p><strong>Hours:</strong> ${item.hours}</p>
                `;

                resultsContainer.appendChild(resultCard);
            });

            resultBox.appendChild(resultsContainer);
        });
    });
});
