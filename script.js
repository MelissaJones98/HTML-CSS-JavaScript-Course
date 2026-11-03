const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = new FormData(form);

  console.log("Name: ", formData.get("name"));
  console.log("Email: ", formData.get("email"));

  form.reset();
});
