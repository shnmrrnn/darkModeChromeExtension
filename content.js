chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.action === "changeBackgroundColor") {
        document.body.style.backgroundColor = request.color;
      } else if (request.action === "changeFontSize") {
        document.body.style.fontSize = request.fontSize + 'px';
      }
    }
  );
  