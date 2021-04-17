/* 
let el = document.getElementById('tilt')

const height = el.clientHeight
const width = el.clientWidth


el.addEventListener('mousemove', handleMove)

function handleMove(e) {
 
  const xVal = e.layerX
  const yVal = e.layerY

  const yRotation = 20 * ((xVal - width / 2) / width)

  const xRotation = -20 * ((yVal - height / 2) / height)

  const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

  el.style.transform = string
}

el.addEventListener('mouseout', function () {
  el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

el.addEventListener('mousedown', function () {
  el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})


el.addEventListener('mouseup', function () {
  el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
}) */

/* 
$(document).ready(function () {

  var mousePos = {};

  function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }

  $(".video").mousemove(function (e) {
    mousePos.x = e.pageX;
    mousePos.y = e.pageY;
  });

  $(".video").mouseleave(function (e) {
    mousePos.x = -1;
    mousePos.y = -1;
  });

  var draw = setInterval(function () {
    if (mousePos.x > 0 && mousePos.y > 0) {

      var range = 15;

      var color = "background: rgb(" + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + "," + getRandomInt(0, 255) + ");";

      var sizeInt = getRandomInt(10, 30);
      let size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";

      var left = "left: " + getRandomInt(mousePos.x - range - sizeInt, mousePos.x + range) + "px;";

      var top = "top: " + getRandomInt(mousePos.y - range - sizeInt, mousePos.y + range) + "px;";

      var style = left + top + color + size;
      $("<div class='ball' style='" + style + "'></div>").appendTo('.video').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () { $(this).remove(); });
    }
  }, 1);
});
 */

// Inspired by other pens :) 