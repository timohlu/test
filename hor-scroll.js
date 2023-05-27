function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  for (let keyword of mobileKeywords) {
    if (userAgent.includes(keyword)) {

      window.addEventListener("load", changeBackgroundColor);

      // Just to check whether its mobile or desktop
  const div = document.querySelector(".mobile-test");
  div.innerHTML = "";
  div.appendChild(document.createTextNode("Mobile"));

      return false;
    }
  }

  return true;
}

if (isDesktop()) {

  // Horizontal Scroll
  var container = document.querySelector('.container');

  container.addEventListener('wheel', function (event) {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
  });

  // Just to check whether its mobile or desktop
  const div = document.querySelector(".mobile-test");
  div.innerHTML = "";
  div.appendChild(document.createTextNode("Desktop"));
}