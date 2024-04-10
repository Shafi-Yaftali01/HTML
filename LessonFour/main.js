let form = document.getElementById("form");

form.addEventListener("submit", (preventError) => {
  preventError.preventDefault();

  // Get all the necessary inputs by their IDs
let fullname, 
  password, 
  experienceInputs, 
  country, 
  ai_experience, 
  email, favcolor, 
  file, birthday; 

  fullname = document.getElementById("fullname");
  password = document.getElementById("password");
  experienceInputs = document.querySelectorAll("input[name='experience']");
  country = document.getElementById("country");
  ai_experience = document.getElementById("ai_experience");
  email = document.getElementById("email");
  favcolor = document.getElementById("favcolor");
  file = document.getElementById("file");
  birthday = document.getElementById("birthday");

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
