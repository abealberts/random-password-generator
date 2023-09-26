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

  var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var pool = [];
  var rand = "";

  var passCriteria = {
    passLength: prompt("Enter password length (8-128 characters):"),
    containsLower: false,
    containsCaps: false,
    containsNum: false,
    containsSpecial: false,
  };

  //takes user length input & checks if it is within character range.
  //If it is within range, it will confirm the different character types & set passCriteria.passLength as the length input.
  //If it is outside of the range, returns an alert and stops the function.
  function validate(userinput) {
    if (passCriteria.passLength >= 8 && passCriteria.passLength <= 128) {
      charInquiry();
      passValidate();
    } else {
      alert("Invalid password length. Password must be between 8-128 characters.");
      return;
    }
  }

  //confirms different character types & outputs to newPassData array
  function charInquiry() {
    passCriteria.containsLower = confirm("Would you like your password to contain lowercase letters?");
    passCriteria.containsCaps = confirm("Would you like your password to contain capital letters?");
    passCriteria.containsNum = confirm("Would you like your password to contain numbers?");
    passCriteria.containsSpecial = confirm("Would you like your password to contain special characters?");
  };

  function passValidate() {
    if (passCriteria.containsLower || passCriteria.containsCaps || passCriteria.containsNum || passCriteria.containsSpecial) {
      generate();
    } else {
      alert("Password must contain at least one type of character. Please try again with valid inputs.");
      return;
    }
  };

  function generate() {

    function assemblePool(){
      if (passCriteria.containsLower){
        pool = pool.concat(lowers);
      }

      if (passCriteria.containsCaps){
        pool = pool.concat(caps);
      }

      if (passCriteria.containsNum){
        pool = pool.concat(numbers);
      }

      if (passCriteria.containsSpecial){
        pool = pool.concat(special);
      }
      console.log("Character Pool: " + pool);
    };

    //Concats relevant character arrays into pool array
    assemblePool();

    //This for loop picks random characters out of the pool array until it meets the user-specified password length
    for (let i = 0; i < passCriteria.passLength; i++) {
      rand = pool[Math.floor(Math.random() * pool.length)];
      newPassArray.push(...rand);
    };

    console.log("new pass array: " + newPassArray);
  };

  //calls validate function using user inputted length
  validate(passCriteria.passLength);

  //Debug logs
  console.log("Password length: " + passCriteria.passLength);
  console.log("Lowercase: " + passCriteria.containsLower);
  console.log("Caps: " + passCriteria.containsCaps);
  console.log("#s: " + passCriteria.containsNum);
  console.log("Special: " + passCriteria.containsSpecial);

  //searches newly generated newPassArray to find at least one of a specific character type: returns true if any are included
  var lowersFound = newPassArray.some(ai => lowers.includes(ai));
  var capsFound = newPassArray.some(ai => caps.includes(ai));
  var numbersFound = newPassArray.some(ai => numbers.includes(ai));
  var specialFound = newPassArray.some(ai => special.includes(ai));

  //Validates that at least one of each selected character type is included in the newPassArray. Will call generate() until password meets criteria.
  if (passCriteria.containsLower && !lowersFound) {
    newPassArray = [];
    generate();
  }
  if (passCriteria.containsCaps && !capsFound) {
    newPassArray = [];
    generate();
  }
  if (passCriteria.containsNum && !numbersFound) {
    newPassArray = [];
    generate();
  }
  if (passCriteria.containsSpecial && !specialFound) {
    newPassArray = [];
    generate();
  }

  //converts newPassArray content into a string without commas
  newPass = newPassArray.join("");

  //returns newly generated password
  return newPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
