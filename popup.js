document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeColor').addEventListener('click', changeBackgroundColor);
    document.getElementById('changeFontSize').addEventListener('click', changeFontSize);
  
    // Initialize the color picker
    const colorPicker = document.getElementById('colorPicker');
    $(colorPicker).spectrum({
      color: "#f00",
      showInput: true,
      showPalette: true,
      showSelectionPalette: true,
      palette: [["red", "rgba(0, 255, 0, .5)", "rgb(0, 0, 255)"]],
      preferredFormat: "hex"
    });
  });

        function changeBackgroundColor() {
          const color = document.getElementById('colorPicker').value;
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "changeBackgroundColor", color: color });
          });
        }
        
        function changeFontSize() {
          const fontSize = document.getElementById('fontSize').value;
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "changeFontSize", fontSize: fontSize });
          });
        }
          