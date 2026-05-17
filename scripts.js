const serviceCards = document.querySelectorAll(".service-card");
const selectedService = document.getElementById("selectedService");
const serviceMessage = document.getElementById("serviceMessage");

/*
|--------------------------------------------------------------------------
| Mock Demo Data
|--------------------------------------------------------------------------
| This is proof-of-concept sample data.
| Later this can be replaced with:
| - 211 API
| - FindHelp API
| - Google Places API
| - County/City Resource Database
|
*/

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

/*
|--------------------------------------------------------------------------
| Service Messages
|--------------------------------------------------------------------------
*/

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

/*
|--------------------------------------------------------------------------
| Create Result Area
|--------------------------------------------------------------------------
*/

const resultBox = document.querySelector(".result-box");

/*
|--------------------------------------------------------------------------
| Handle Service Selection
|--------------------------------------------------------------------------
*/

serviceCards.forEach((card) => {
    card.addEventListener("click", () => {

        const service = card.dataset.service;

        // Remove active state from all cards
        serviceCards.forEach((item) => {
            item.classList.remove("active");
        });

        // Add active state
        card.classList.add("active");

        // Update title and intro message
        selectedService.textContent = service;
        serviceMessage.textContent = messages[service];

        // Get mock data
        const services = mockServices[service];

        // Remove old service list if it exists
        const existingList = document.getElementById("service-results");

        if (existingList) {
            existingList.remove();
        }

        // Create service result container
        const resultsContainer = document.createElement("div");
        resultsContainer.id = "service-results";
        resultsContainer.style.marginTop = "25px";

        // Build service cards
        services.forEach((item) => {

            const serviceCard = document.createElement("div");

            serviceCard.style.background = "#f9fafb";
            serviceCard.style.padding = "20px";
            serviceCard.style.borderRadius = "14px";
            serviceCard.style.marginBottom = "16px";
            serviceCard.style.border = "1px solid #e5e7eb";

            serviceCard.innerHTML = `
                <h4 style="margin-bottom:10px; color:#111827;">
                    ${item.name}
                </h4>

                <p style="margin-bottom:8px; color:#4b5563;">
                    📍 ${item.address}
                </p>

                <p style="margin-bottom:8px; color:#4b5563;">
                    📞 ${item.phone}
                </p>

                <p style="color:#2563eb; font-weight:600;">
                    ⏰ ${item.hours}
                </p>
            `;

            resultsContainer.appendChild(serviceCard);
        });

        // Add results to page
        resultBox.appendChild(resultsContainer);
    });
});
