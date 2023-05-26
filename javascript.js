const myInput = document.querySelector("#password");
const secondPasswordInput = document.querySelector("#second-password")
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");


//When the user clicks on the password field, show the password validation messages
myInput.onfocus = function () {
  document.querySelector(".password-validation").style.display = "block";
}

secondPasswordInput.onfocus = function () {
  document.querySelector(".match").style.display = "block";
}


//When the user clicks outside of the password field, hide the message box
myInput.onblur = function () {
  document.querySelector(".password-validation").style.display = "none";
}

secondPasswordInput.onblur = function () {
  document.querySelector(".match").style.display = "none";
}


//When the user starts to type something inside the password field
myInput.onkeyup = function () {
  //Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  //Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  //Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  //Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//Secondary password confirmation

secondPasswordInput.onkeyup = function () {
  document.querySelector(".match").classList.add("invalid");
  if (secondPasswordInput.value === myInput.value) {
    document.querySelector(".match").classList.remove("invalid");
    document.querySelector(".match").classList.add("valid");
  }
}
