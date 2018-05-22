var button_container = document.getElementsByClassName("button_container")[0];
var first_box1 = document.getElementsByClassName("first_box1")[0];
var first_box2 = document.getElementsByClassName("first_box2")[0];
var first_box3 = document.getElementsByClassName("first_box3")[0];
var button = document.getElementsByClassName("button")[0];

var onClickOne = function (e) {
  var $elOne = e.target;
  
  e.stopPropagation();
  
  alert('CLICK!');
  
  var timer = setTimeout(function(){
    $elOne.classList.toggle("box_one");
  }, 100);
}

first_box1.onclick = onClickOne;
first_box2.onclick = onClickOne;
first_box3.onclick = onClickOne;

var onClickTwo = function (el) {
  var $elTwo = el.target;
  
  el.preventDefault();
  
  alert("You Don't Have Permission to Access! Sorry =_(");
}

button_container.onclick = onClickTwo;
button.onclick = onClickTwo;