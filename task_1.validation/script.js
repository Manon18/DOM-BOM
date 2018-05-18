var center = document.getElementsByClassName("center_container")[0];
    currentForm = document.createElement("form");
currentForm.setAttribute("name", "login");
currentForm.setAttribute("action", "google.com");
center.appendChild(currentForm);


var newInputYourAge = document.createElement("input");
newInputYourAge.setAttribute("type", "text");
newInputYourAge.setAttribute("name", "age");
newInputYourAge.placeholder = "Enter your age";
currentForm.insertAdjacentElement('afterbegin', newInputYourAge);

var newInputYourName = document.createElement("input");
newInputYourName.setAttribute("type", "text");
newInputYourName.setAttribute("name", "username");
newInputYourName.placeholder = "Enter your name";
currentForm.insertAdjacentElement("beforeend", newInputYourName);

var newInputCurrentDate = document.createElement("input");
newInputCurrentDate.setAttribute("type", "text");
newInputCurrentDate.setAttribute("name", "date");
newInputCurrentDate.value = moment().format('L');
newInputCurrentDate.placeholder = "Current date dd/mm/yyyy";
currentForm.insertAdjacentElement("beforeend", newInputCurrentDate);

var newInputSubmitButton = document.createElement("input");
newInputSubmitButton.setAttribute("type", "submit");
newInputSubmitButton.setAttribute("value", "Validate Me");
currentForm.insertAdjacentElement("beforeend", newInputSubmitButton);

function valid(ev) {
  ev.preventDefault();

  var ageRegex = /^[0-9]+$/;
  if(!ageRegex.test(newInputYourAge.value)) {
    alert('Invalid age!');
    return false;
  }

  var userNameRegex = /^user_([a-z-0-9])*(\@)*([a-z])+(\.)*([a-z])+$/;
  if(!userNameRegex.test(newInputYourName.value)) {
    alert('Invalid name!');
    return false;
  }

  var dateRegex = /^(0[1-9]|1[012])([- /.])(0[1-9]|[12][0-9]|3[01])\2(19|20)\d\d$/;
  if(!dateRegex.test(newInputCurrentDate.value)) {
    alert('Invalid date!');
    return false;
  }

  alert("Your age is " + newInputYourAge.value + ", " + "name " + newInputYourName.value + ", " + "current date " + newInputCurrentDate.value);
    return true;

}

newInputSubmitButton.addEventListener("click", valid);