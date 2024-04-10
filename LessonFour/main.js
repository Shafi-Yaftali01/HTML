let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get all the necessary inputs by their IDs
  let fullname = document.getElementById("fullname");
  let password = document.getElementById("password");
  let experienceInputs = document.querySelectorAll("input[name='experience']");
  let country = document.getElementById("country");
  let ai_experience = document.getElementById("ai_experience");
  let email = document.getElementById("email");
  let favcolor = document.getElementById("favcolor");
  let file = document.getElementById("file");
  let birthday = document.getElementById("birthday");

  // Checking if any of the radio buttons (experience) is selected
  let experienceSelected = Array.from(experienceInputs).some(input => input.checked);

  // Check if every field has a value
  if (
    fullname.value && 
    password.value && 
    experienceSelected && 
    country.value && 
    ai_experience.value && 
    email.value && 
    favcolor.value && 
    file.value && 
    birthday.value
  ) {
    alert(`Congratulations on applying ${fullname.value}, we will be in contact soon!`);
  } else {
    alert("Please ensure that you add value for every input");
  }
});
