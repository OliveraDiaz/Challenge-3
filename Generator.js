var generateBtn = document.querySelector("#generate");

function promptQuestions() {
  var pwLength = parseInt(window.prompt('How many characters should your password be? \n Must be a minimum of 8 characters.'));
  if (Number.isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    window.alert("Invalid input. Please enter a numerical value between 8 and 128.");
    return null;
  }

 var incUpperCase = window.confirm('Would you like to include uppercase?');
 var incLowerCase = window.confirm('Would you like to add lower case characters?');
 var incSpecialCharacters = window.confirm('Would you like to include special characters?');
 var incNumbers = window.confirm('Would you like to include numbers in your password?'); 

  var userPWRequirements = {
    length: pwLength,
    upperCase: incUpperCase,
    lowerCase: incLowerCase,
    specialChars: incSpecialCharacters,
    numbers: incNumbers,
  };

  return userPWRequirements;
}


function generatePassword() {
  var options = promptQuestions();

  if(!options) {
    return "";
  }

  var charset = "";
  if (options.upperCase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
  if (options.lowerCase) {
  charset += "abcdefghijklmnopqrstuvwxyz";
}
  if (options.specialChars) {
  charset += "!@#$%^&*_+";
} 
  if (options.numbers) {
  charset += "0123456789";
}

var password = "";
for (var i = 0; i < pwLength; i++) {
   var randomIndex = Math.floor(Math.random() * pwLength.length);
  password += charset.charAt(randomIndex);
  }
  return password;
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (passwordText) {
    passwordText.value = password;
 }
}

generateBtn.addEventListener("click", writePassword);