const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("YOUR_PUBLIC_KEY");
})();

emailjs.sendForm(serviceID, templateID, templateParams, publicKey);

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
