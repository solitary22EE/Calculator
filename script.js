// Function to clear the input display
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
  }
  
  // Function to append a number to the input display
  function appendNumber(number) {
    var display = document.getElementById('display');
    display.value += number;
  }
  
  // Function to append an operator to the input display
  function appendOperator(operator) {
    var display = document.getElementById('display');
    display.value += operator;
  }
  
  // Function to calculate and display the result
  function calculateResult() {
    var display = document.getElementById('display');
    var result = eval(display.value); // Using eval() for simplicity, but not recommended in production
    display.value = result;
  }
  