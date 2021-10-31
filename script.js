let selectedCharacters = [""];
const lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
    "x", "y", "z",
];
const capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
    "X", "Y", "Z",
];
const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

const passParameters = {
  quantity: "",
  lowercase: "",
  uppercase: "",
  numeric: "",
  special: "",
};

const randomCharacter = function () {
  // Selects one character from selectedCharacters
  var selectCharacter =
    selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  return selectCharacter;
};

const addEachCharacter = function (array1) {
  // Adds to selected characters with an array as an argument
  for (let i = 0; i < array1.length; i++) {
    selectedCharacters.push(array1[i]);
  }
};

// Ask for password requirements
const passPrompts = function () {
  // Reset selected characters for additional clicks
  selectedCharacters = [""];

  let numCharacters = window.prompt(
    "How many characters should your password include, between 8 and 128?"
  );
  // Check if response is valid, add or is not number
  while (numCharacters < 8 || numCharacters > 128 || isNaN(numCharacters)) {
    window.alert("Input must be a number between 8 and 128.");
    numCharacters = window.prompt(
      "How many characters should your password include, between 8 and 128?"
    );
  }
  // Update passParameters with user provided number
  passParameters.quantity = numCharacters;

  // Check if user wants lowercase numbers
  let hasLowercase = window.confirm(
    "Do you want lowercase characters in your password?"
  );
  passParameters.uppercase = hasLowercase;
  if (hasLowercase) {
    addEachCharacter(lowLetters);
  }

  // Check if user wants uppercase characters
  let hasUppercase = window.confirm(
    "Do you want uppercase characters in your password?"
  );
  passParameters.uppercase = hasUppercase;
  if (hasUppercase) {
    addEachCharacter(capLetters);
  }

  // Check if user wants numeric characters
  let hasNumeric = window.confirm(
    "Do you want numeric characters in your password?"
  );
  passParameters.special = hasNumeric;
  if (hasNumeric) {
    addEachCharacter(numbers);
  }

  // Check if user wants special characters
  let hasSpecial = window.confirm(
    "Do you want special characters in your password?"
  );
  passParameters.special = hasSpecial;
  if (hasSpecial) {
    addEachCharacter(symbols);
  }

  // If no type of character is selected, make user repeat process
  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    window.alert("Try again! Please select at least one character type.");
    passPrompts();
  }
};

const generatePassword = function () {
  passPrompts();

  // Builds keyword based on passParameters
  const keyword = [];

  for (let i = 0; i < passParameters.quantity; i++) {
    keyword.push(randomCharacter());
  }

  // Change keyword into string and return
  let string = keyword.join("");
  return string;
};

// Get reference to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
