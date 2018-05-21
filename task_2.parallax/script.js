window.addEventListener('scroll', function (e) {
  var $parallax = document.getElementsByClassName('parallax')[0];
  var posY = window.pageYOffset * 0.4;
  console.log(posY);
  $parallax.style.backgroundPosition = '0px ' + posY + 'px';
});