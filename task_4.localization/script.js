let userName = prompt("Please, enter your name");
let nameRegex = /^[A-Za-z.!@?#"$%&:;() *\+,\/;\-=[\\\]\^_{|}<>\u0400-\u04FF]*$/;
  while((!userName) || (!nameRegex.test(userName))) {
    userName = prompt("Invalid name! Please, try again to enter your name:");
  }
  
let userNameSpan = document.getElementById("userName");
userNameSpan.innerHTML = ", " + userName + "!";

const CURRENT_LANGUAGE_KEY = "currentLanguage";

var applyLanguage = function (lang) {
 window.localStorage.setItem(CURRENT_LANGUAGE_KEY, lang);
 alert("Now you saved " + lang + " language");
}

var getCurrentLanguage = function () {
 var defaultLanguage = 'ua';
 
  var savedLang = window.localStorage.getItem(CURRENT_LANGUAGE_KEY);
  
  return savedLang ? savedLang : defaultLanguage;
}

var currentLang = getCurrentLanguage();
showTextForLanguage(currentLang);

let initiallySelectedButton = document.querySelectorAll("input[name=lang][value="+ currentLang +"]")[0];
initiallySelectedButton.checked = true;

var radioButtons = document.querySelectorAll("input[name=lang]");

for (let i = 0; i < radioButtons.length; i++) {
 radioButtons[i].addEventListener("click", function() {
   showTextForLanguage(radioButtons[i].value);
  });
}

function showTextForLanguage(lang) {
 let allEls = document.getElementsByClassName("lang");
  for (let i = 0; i < allEls.length; i++) {
   if(allEls[i].classList.contains("lang-" + lang)) {
     allEls[i].classList.add('visible');
    } else {
     allEls[i].classList.remove('visible');
    }
  }
  alert("Now your language is: " + lang);
}

var $save = document.querySelector('#save');

$save.addEventListener('click', function(){
 let selectedRadioButton = document.querySelectorAll("input[name=lang]:checked")[0];
 applyLanguage(selectedRadioButton.value);
});