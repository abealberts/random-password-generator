// Assignment Code
var generateBtn = document.querySelector("#generate");

var hasUpper = false;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var newPassData = [0, 0, 0, 0]

  var newPass = " "

  var passCriteria = {
    passLength: prompt("Enter password length (8-128 characters):"),
    containsCaps: false,
    containsNum: false,
    containsSpecial: false,
  };

  //takes user length input & checks if it is within character range.
  //If it is within range, it will confirm the different character types & set newPassData[0] as the length value.
  //If it is outside of the range, returns an alert and stops the function.
  function validate(userinput) {
    if (passCriteria.passLength >= 8 && passCriteria.passLength <= 128) {
      charInquiry();
      newPassData[0] = passCriteria.passLength;
    } else {
      alert("Invalid password length. Password must be between 8-128 characters.");
      newPass = "Password generation failed. Please try again with valid inputs."
      return;
    }
  }

  //confirms different character types & outputs to newPassData array
  function charInquiry() {
    passCriteria.containsCaps = confirm("Would you like your password to contain capital letters?");
    newPassData[1] = passCriteria.containsCaps;

    passCriteria.containsNum = confirm("Would you like your password to contain numbers?");
    newPassData[2] = passCriteria.containsNum;

    passCriteria.containsSpecial = confirm("Would you like your password to contain special characters?");
    newPassData[3] = passCriteria.containsSpecial;

    //for testing only, remove when further along
    newPass = newPassData;
  }
newPass
  //calls validate function using user inputted length
  validate(passCriteria.passLength);

  console.log("Password length: " + passCriteria.passLength);
  console.log("Caps: " + passCriteria.containsCaps);
  console.log("#s: " + passCriteria.containsNum);
  console.log("Special: " + passCriteria.containsSpecial);
  console.log("newPassData: " + newPassData);

  return newPass;
}

//Need to build random character generator

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
