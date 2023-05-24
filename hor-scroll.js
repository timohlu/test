var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  // Code to be executed if the user is on a mobile device
  console.log('User is using a mobile device.');
  // Additional mobile-specific logic or actions
} else {
  var container = document.querySelector('.container');

    container.addEventListener('wheel', function(event) {
      event.preventDefault();
      container.scrollLeft += event.deltaY;
    });
  console.log('User is using a desktop.');
}
