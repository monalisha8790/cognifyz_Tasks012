// Button Color Change Functionality
document.getElementById('colorButton').addEventListener('click', function() {
    var button = document.getElementById('colorButton');
    var currentColor = button.style.backgroundColor;
    var newColor = currentColor === 'rgb(0, 123, 255)' ? '#dc3545' : '#007bff';
    button.style.backgroundColor = newColor;
  });
  
  // Greeting Alert
  document.getElementById('greetingButton').addEventListener('click', function() {
    var time = new Date().getHours();
    var greeting;
  
    if (time < 12) {
      greeting = "Good morning!";
    } else if (time < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    alert(greeting);
  });
  
  // Basic Calculator
  function calculate() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result').innerHTML = 'Result: ' + result;
  }
  