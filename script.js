
function generatePass() {
    var letters = "abcdefghijklmnopqrstuvwxyz"
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var numberList = "0123456789"
    var randomString = "";
    var password = ""; 
    var passLength = document.getElementById("passLength").value;
    var useLowerCase = document.getElementById("lowerCase");
    var useUpperCase = document.getElementById("upperCase");
    var useNumbers =  document.getElementById("numbers");
    var useSpecialChar =  document.getElementById("specialChar");
    
    document.getElementById("errorMessage").style.display = "none";
    //verify that the password length is between 8 and 128 characters
    if(isNaN(passLength)) {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Length must be at number";
    }
    else if (passLength < 8)  {
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Length must be at least 8 characters";
    }
    else if(passLength > 128){ 
        document.getElementById("errorMessage").style.display = "block";
        document.getElementById("errorMessage").textContent = "Length can not be longer that 128 characters";
    }
  
    //build string that will be used by the random function to pick a random character.
    if(useUpperCase.checked){
        randomString = letters.toLocaleUpperCase();
    }
    if(useLowerCase.checked){
        randomString = randomString + letters;
    }
    if(useSpecialChar.checked) {
        randomString = randomString + specialCharacters;
    }
    if(useNumbers.checked) {
        randomString = randomString + numberList;
    }
    //generate password
    for (var i = 1; i <= passLength; i++) {
        var num = Math.floor(Math.random() * randomString.length) ;
        password = password + randomString.charAt(num);
        document.getElementById("passBox").value = password;
    }
   
    console.log(password);
}
