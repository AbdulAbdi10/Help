const serviceData = {
  housing: {
    icon: "🏠",
    title: "Housing Help",
    description: "Get connected to housing support, rental assistance, or local housing navigation services.",
    action: "Start by contacting your local county or community housing resource line. You can also search for housing help through 211.",
    link: "https://www.211.org/"
  },
  mentalHealth: {
    icon: "💙",
    title: "Mental Health Support",
    description: "Find crisis support, counseling resources, or someone to talk to right now.",
    action: "For immediate mental health crisis support, call or text 988. For local referrals, use 211.",
    link: "https://988lifeline.org/"
  },
  food: {
    icon: "🥘",
    title: "Food Support",
    description: "Find food shelves, meal programs, SNAP support, and nearby community food resources.",
    action: "Use 211 to locate food shelves and meal programs near you.",
    link: "https://www.211.org/"
  },
  shelter: {
    icon: "🛏️",
    title: "Shelter for Tonight",
    description: "Find emergency shelter or temporary overnight support if you need a safe place tonight.",
    action: "Call 211 for shelter availability. If you are in immediate danger, call 911.",
    link: "https://www.211.org/"
  }
};

const buttons = document.querySelectorAll(".service-option");
const resultCard = document.getElementById("result");
const resultIcon = document.getElementById("resultIcon");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const resultAction = document.getElementById("resultAction");
const resultLink = document.getElementById("resultLink");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedService = button.dataset.service;
    const service = serviceData[selectedService];

    buttons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    resultIcon.textContent = service.icon;
    resultTitle.textContent = service.title;
    resultDescription.textContent = service.description;
    resultAction.textContent = service.action;
    resultLink.href = service.link;

    resultCard.classList.remove("hidden");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
});
