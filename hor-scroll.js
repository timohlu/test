// Hide the class
function hideClass(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 0;
  }
}

// Show the class again
function showClass(className) {
  var elements = document.getElementsByClassName(className);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.opacity = 1;
  }
}

// Example usage
var className = "my-class";


// ------------- Mobile
function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  for (let keyword of mobileKeywords) {
    if (userAgent.includes(keyword)) {

      hideClass(className);

      window.addEventListener("load", changeBackgroundColor);

      // Just to check whether its mobile or desktop
      function changeBackgroundColor() {
        var div = document.getElementById("mobile-test-id");
        div.style.backgroundColor = "green";
      }

      return false;
    }
  }

  return true;
}

// ------------- Desktop
if (isDesktop()) {

  showClass(className);

  // Horizontal Scroll
  var container = document.querySelector('.container');

  container.addEventListener('wheel', function (event) {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
  });

  // Just to check whether its mobile or desktop
  window.addEventListener("load", changeBackgroundColor);

  function changeBackgroundColor() {
    var div = document.getElementById("mobile-test-id");
    div.style.backgroundColor = "blue";
  }
}