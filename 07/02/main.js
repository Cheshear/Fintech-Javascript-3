let button;
let ol;
window.onload=function () {
  button =document.getElementById("button");
  ol = document.getElementById("list");
  doubleClick(button, doubleClickHandler, 400);
};
let clickCount = 0;

function doubleClickHandler() {
  let d = new Date(); // for now
  let li = document.createElement("li");
  li.appendChild(document.createTextNode("2xClick - "+d));
  ol.appendChild(li);

}


function doubleClick(element, doubleClickHandler, timeDistance){
  element.addEventListener('click', function() {
    clickCount++;
    if (clickCount === 1) {
      singleClickTimer = setTimeout(function() {
        clickCount = 0;
      }, timeDistance);
    } else if (clickCount === 2) {
      clearTimeout(singleClickTimer);
      clickCount = 0;
      doubleClickHandler();
    }
  }, false);
}
