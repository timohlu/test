function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  for (let keyword of mobileKeywords) {
    if (userAgent.includes(keyword)) {

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

if (isDesktop()) {
  
  // Horizontal Scroll
  var container = document.querySelector('.container');

    container.addEventListener('wheel', function(event) {
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

