//CALCULATOR LOGIC

const output = document.getElementById("output");
var num1 = "", num2 = "", opr;

var isOutput = false

function getNum(num) {
  if (isOutput) {
    clearOutput()
    isOutput = false
  }
  output.value += num;

}

function clearOutput() {
  output.value = null;
}

function getOpr(input) {
  opr = input;
  output.value += input
}

function calculate() {
  let ans;
  num1 = "";
  num2 = "";
  opr = "";

  var oprAaya = false;

  for (var j = 0; j < output.value.length; j++) {
    var x = output.value[j]

    if (x != '+' && x != '-' && x != '/' && x != '*' && x != '%') {
      if (!oprAaya) {
        num1 += x
      } else {
        num2 += x
      }
    } else {
      if (!oprAaya) {
        opr = x
        oprAaya = true
      } else {
        alert("Only one operator allowed!")
        clearOutput()
        return;
      }
    }
  }

  num1 = parseFloat(num1)
  num2 = parseFloat(num2)

  isOutput = true

  switch (opr) {
    case '+':
      ans = num1 + num2;
      break;

    case '-':
      ans = num1 - num2;
      break;

    case '*':
      ans = num1 * num2;
      break;

    case '/':
      ans = num1 / num2;
      break;

    case '%':
      ans = num1 % num2;
      break;    
  }

  output.value = ans;

  oprAaya = false
}

clearOutput();

function deleteThisOpr() {
  if (isOutput) {
    isOutput = false
    clearOutput()
  }

  newVal = ""

  for (var i = 0; i < output.value.length - 1; i++) {
    newVal += output.value[i]
  }

  output.value = newVal
}