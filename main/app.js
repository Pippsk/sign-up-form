"use strict";

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const firstName = document.querySelector(".first_name");
// const lastName = document.querySelector(".last_name");
// const email = document.querySelector(".email");
// const password = document.querySelector(".password");
// const submitBtn = document.querySelector("button");
// const errorImg = document.querySelector(".error_img");
// const errorMsg = document.querySelector(".error_msg");

// const error1 = document.querySelector(".error1");
// const error2 = document.querySelector(".error2");
// const error3 = document.querySelector(".error3");
// const error4 = document.querySelector(".error4");

// const image1 = document.querySelector(".image1");
// const image2 = document.querySelector(".image2");
// const image3 = document.querySelector(".image3");
// const image4 = document.querySelector(".image4");

// function validateEmail(input, error, img) {
//   const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (input.value.match(mailFormat)) {
//     error.classList.add("hidden");
//     img.classList.add("hidden");
//   } else {
//     error.classList.remove("hidden");
//     img.classList.remove("hidden");
//   }
// }

// const errorMessage = function (input, error, img) {
//   if (input.classList.contains("email") && input.value !== "@") {
//     error.classList.remove("hidden");
//     img.classList.remove("hidden");
//   } else if (input.value === "") {
//     error.classList.remove("hidden");
//     img.classList.remove("hidden");
//   } else {
//     error.classList.add("hidden");
//     img.classList.add("hidden");
//   }
// };

// submitBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   errorMessage(firstName, error1, image1);
//   errorMessage(lastName, error2, image2);
//   validateEmail(email, error3, image3);
//   errorMessage(password, error4, image4);
// });

// const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["first_name"].value;
  const lastName = form["last_name"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstName", "First Name is required");
  }
});
