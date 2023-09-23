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

  var newPassArray = [];
  var newPass = "";

  var passCriteria = {
    passLength: prompt("Enter password length (8-128 characters):"),
    containsLower: false,
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
      passValidate();
    } else {
      alert("Invalid password length. Password must be between 8-128 characters.");
      newPass = "Password generation failed. Please try again with valid inputs.";
      return;
    }
  }

  //confirms different character types & outputs to newPassData array
  function charInquiry() {
    passCriteria.containsLower = confirm("Would you like your password to contain lowercase letters?");
    passCriteria.containsCaps = confirm("Would you like your password to contain capital letters?");
    passCriteria.containsNum = confirm("Would you like your password to contain numbers?");
    passCriteria.containsSpecial = confirm("Would you like your password to contain special characters?");

    //for testing only, remove when further along;
  };

  function passValidate() {
    if (passCriteria.containsLower || passCriteria.containsCaps || passCriteria.containsNum || passCriteria.containsSpecial) {
      generate();
    } else {
      alert("Password must contain at least one type of character. Please try again with valid inputs.");
      newPass = "Password must contain at least one type of character. Please try again with valid inputs.";
      return;
    }
  };

  function generate() {
    var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var caps = []
    console.log(lowers.length);
    var rand = "";

    for (let i = 0; i < passCriteria.passLength; i++) {
      rand = lowers[Math.floor(Math.random() * lowers.length)];
      newPassArray.push(...rand);
      console.log(newPassArray);
    }

    return newPass;
  };

  //calls validate function using user inputted length
  validate(passCriteria.passLength);

  console.log("Password length: " + passCriteria.passLength);
  console.log("Lowercase: " + passCriteria.containsLower);
  console.log("Caps: " + passCriteria.containsCaps);
  console.log("#s: " + passCriteria.containsNum);
  console.log("Special: " + passCriteria.containsSpecial);

  newPass = newPassArray.join("");
  return newPass;
}

//Need to build random character generator

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
