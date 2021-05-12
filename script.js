// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = "";
  var passwordLength = window.prompt("How long do you want you password to be? (8-128 characters)");
  var includeLowercase = window.confirm("Would you like to include lower case characters?");
  var includeUppercase = window.confirm("Would you like to include upper case characters?");
  var includeNumbers = window.confirm("Would you like to include numeric characters?");
  var includeSpecial = window.confirm("Would you like to include special characters?");
  
  // All true
  if (includeLowercase === true && includeUppercase === true && includeNumbers === true && includeSpecial === true ) {
    for (i = 0; i < passwordLength; i++) {
      // The next line uses random combined with code to convert random numbers to their ASCII equivalent
      password += String.fromCharCode(Math.floor(Math.random() * (127 - 33) + 33));
    }
  }
  // No lowercase
  else if (includeLowercase === false && includeUppercase === true && includeNumbers === true && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * (98 - 33) + 33));
    }
  }
  // No uppercase
  else if (includeLowercase === true && includeUppercase === false && includeNumbers === true && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      // These if else statements make it so there is equal opportunity for each catagory: Lowercase, Uppercase, Numbers, Special
      if (Math.random() > .5) {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 91) + 91));
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 33) + 33));
      }
    }
  }
  // No numbers
  else if (includeLowercase === true && includeUppercase === true && includeNumbers === false && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .69) {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 58) + 58));
      }
      else if (Math.random() > .38){
        password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33));
      }
      else if (Math.random() > .20) {
        password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)); // symbols these four lower
      }
      else if (Math.random() > .12){
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)); 
      }
      else if (Math.random() > .04){
        password += String.fromCharCode(Math.floor(Math.random() * (97 - 91) + 91)); 
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 123) + 123)); 
      }
    }
  }
  // No special
  else if (includeLowercase === true && includeUppercase === true && includeNumbers === true && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .58) {
        password += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)); // Lowercase
      }
      else if (Math.random() > .17){
        password += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)); // Uppercase
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)); // Numbers
      }
    }
  }
  // Only uppercase
  else if (includeLowercase === false && includeUppercase === true && includeNumbers === false && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65));
    }
  }
  // Only lowercase
  else if (includeLowercase === true && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97));
    }
  }
  // Only numbers
  else if (includeLowercase === false && includeUppercase === false && includeNumbers === true && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      password += String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48));
    }
  }
  // Only special 
  else if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .53) {
        password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)); 
      }
      else if (Math.random() > .31){
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)); 
      }
      else if (Math.random() > .125){
        password += String.fromCharCode(Math.floor(Math.random() * (97 - 91) + 91)); 
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 123) + 123)); 
      }
    }
  }
  // Uppercase and lowercase
  else if (includeLowercase === true && includeUppercase === true && includeNumbers === false && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .5) {
        password += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)); // Lowercase
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)); // Uppercase
      }
    }
  }
  // Numbers and symbols
  else if (includeLowercase === false && includeUppercase === false && includeNumbers === true && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .64) {
          password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)); 
      }
      else if (Math.random() > .40){
        password += String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)); // Numbers
      }
      else if (Math.random() > .24){
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)); 
      }
      else if (Math.random() > .09){
        password += String.fromCharCode(Math.floor(Math.random() * (97 - 91) + 91)); 
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 123) + 123)); 
      }
    }
  }
  // Uppercase and symbols
  else if (includeLowercase === false && includeUppercase === true && includeNumbers === false && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .55) {
        password += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)); // Uppercase
      }
      else if (Math.random() > .29) {
        password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)); 
      }
      else if (Math.random() > .17){
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)); 
      }
      else if (Math.random() > .068){
        password += String.fromCharCode(Math.floor(Math.random() * (97 - 91) + 91)); 
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 123) + 123)); 
      }
    }
  }
  // Lowercase and symbols
  else if (includeLowercase === true && includeUppercase === false && includeNumbers === false && includeSpecial === true) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .55) {
        password += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)); // Lowercase
      }
      else if (Math.random() > .29) {
        password += String.fromCharCode(Math.floor(Math.random() * (48 - 33) + 33)); 
      }
      else if (Math.random() > .17){
        password += String.fromCharCode(Math.floor(Math.random() * (65 - 58) + 58)); 
      }
      else if (Math.random() > .068){
        password += String.fromCharCode(Math.floor(Math.random() * (97 - 91) + 91)); 
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (127 - 123) + 123)); 
      }
    }
  }
  // Uppercase and numbers
  else if (includeLowercase === false && includeUppercase === true && includeNumbers === true && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .28) {
        password += String.fromCharCode(Math.floor(Math.random() * (91 - 65) + 65)); // Uppercase
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)); // Numbers
      }
    }
  }
  // Lowercase and numbers
  else if (includeLowercase === true && includeUppercase === false && includeNumbers === true && includeSpecial === false) {
    for (i = 0; i < passwordLength; i++) {
      if (Math.random() > .28) {
        password += String.fromCharCode(Math.floor(Math.random() * (123 - 97) + 97)); // Lowercase
      }
      else {
        password += String.fromCharCode(Math.floor(Math.random() * (58 - 48) + 48)); // Numbers
      }
    }
  }
  else if (includeLowercase === false && includeUppercase === false && includeNumbers === false && includeSpecial === false) {
    window.alert("You need to slect at least on of the options. Try again!")
  }

  return password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

