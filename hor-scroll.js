function isDesktop() {
  const userAgent = navigator.userAgent.toLowerCase();
  const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];

  for (let keyword of mobileKeywords) {
    if (userAgent.includes(keyword)) {

  window.addEventListener("load", changeBackgroundColor);

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
  var container = document.querySelector('.container');

  container.addEventListener('wheel', function (event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
  });

  window.addEventListener("load", changeBackgroundColor);

function changeBackgroundColor() {
  var div = document.getElementById("mobile-test-id");
  div.style.backgroundColor = "blue";
}

  console.log('User is using a desktop.');
}

