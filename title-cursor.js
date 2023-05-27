 function moveText(event) {
      var div = event.currentTarget;
      var text = div.querySelector('.cursor-text');

      var offsetX = event.clientX;
      var offsetY = event.clientY;

      text.style.left = offsetX + 'px';
      text.style.top = offsetY + 'px';
      text.style.transform = 'translate(-50%, -50%)'; // Center the text

      text.style.display = 'block';
    }

    function hideText(event) {
      var text = event.currentTarget.querySelector('.cursor-text');
      text.style.display = 'none';
    }
    