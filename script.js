const circle = document.getElementById('circle');

    function changeColor(color) {
      circle.style.backgroundColor = color;
    }

    function resetColor() {
      circle.style.backgroundColor = 'white';
    }

    function chooseCustomColor() {
      const customColor = document.getElementById('customColorInput').value;
      circle.style.backgroundColor = customColor;
    }