window.addEventListener('scroll', function (e) {
  var $parallax = document.getElementById('parallax');
  var posY = document.body.pageXOffset * 0.7;
  console.log(posY);
  $parallax.style.backgroundPosition = '0px '+posY+'px';
});