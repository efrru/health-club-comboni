
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

// Mobile navigation
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    navigation.classList.toggle("active");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("active");
    });
  });
}

// Contact form demonstration
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    formMessage.textContent =
      "Thank you for contacting Health Club - Comboni! This demo form is not connected to email yet.";

    contactForm.reset();
  });
}
