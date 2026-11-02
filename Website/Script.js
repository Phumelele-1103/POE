// Get Inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const cellphoneInput = document.getElementById("cellphone");
const form = document.getElementById("form");
const suggestion = document.getElementById("comment");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const cellphoneError = document.getElementById("cellphoneError");
const commentsError = document.getElementById("commentError");

form.addEventListener("submit", function(event){

  // Clears Error Messages
 nameError.textContent = "";
 emailError.textContent = "";
 cellphoneError.textContent = "";
 commentsError.textContent = "";
  
  //Prevent Page From Refreshing
  event.preventDefault();

  //Get And Validate Input
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const cellphone = cellphoneInput.value.trim();
  const gender = document.querySelector('input[name="gender"]:checked');
  const comment = suggestion.value.trim();

  let isValid = true;
  
// Handling Name Input
  if (name === "") {
    nameError.textContent = "Please Enter Your Name.";
    isValid = false;
}
  // Handling Email Input
  if (email === "") {
    emailError.textContent = "Please Enter Your Email.";
    isValid = false;
}
  // Handling Cellphone Input
  if (cellphone === "") {
    cellphoneError.textContent = "Please Enter Your cellphone Number.";
    isValid = false;
}

  // Handling Text Area Input
  if (comment === "") {
    feedback.textContent = "Please Type Input.";
    isValid = false;
}
  // If all Fields Are Empty
  if(!isValid){
    return;
  }

    // Validating Patterns
  const namePattern = /^[\p{L}\p{M}]+(?:[ '\u2019-][\p{L}\p{M}]+)*$/u;
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const cellphonePattern = /^0[6-8][0-9]{8}$/;
  const commentsPattern = /^[A-Za-z][\s\S]*$/;
  
  // Validate Name Pattern
  if(!namePattern.test(name)){
    nameError.textContent = "Name Should Only be Letters!";
    nameInput.focus();
    return;
  }

    // Validate Email Pattern
  if(!emailPattern.test(email)){
    emailError.textContent = "Enter Valid Email Format!";
    emailInput.focus();
    return;
  }

    // Validate Cellphone Pattern
  if(!cellphonePattern.test(cellphone)){
    cellphoneError.textContent = "Enter Valid Cellphone Number!";
    cellphoneInput.focus();
    return;  
  }

    // Validate Comment Input Format
  if(!commentsPattern.test(comment)){
    commentsError.textContent = "Enter Valid Input!";
    nameInput.focus();
    return;
  }

  // Capture User Details
  const userDetails = {
    name: name,
    gender: gender.value,
    email: email,
    cellphone: cellphone,
    comment: comment
  };

  sessionStorage.setItem(
    "userDetails", JSON.stringify(userDetails)
  );
  //window.location.href = "Index.html";

  // Redirect To Submission Page
  window.location.replace("Submission.html");
});