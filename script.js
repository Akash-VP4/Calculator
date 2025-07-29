function operate(num1, num2, operator) {
  if (isNaN(num1) || isNaN(num2)) {
    return 0;
  }
  // console.log(operator)
  if (operator == "+") {
    // console.log(num1+num2)
    return num1 + num2;
  } else if (operator == "-") {
    return num1 - num2;
  } else if (operator == "*") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

function display(num) {
  if (num == "") {
    num = 0;
  }
  const disp = document.querySelector(".display");
  disp.innerHTML = num;
}

const buttons = document.querySelectorAll("button");

const operators = ["+", "-", "*", "/"];
const valuess = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let number1 = "";
let number2 = "";
let oper = "";
let flag = 0;
let dispContent = "";
let prev = number1;
let temp = "0";

// on screan keyboard
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "decimal") {
      if (prev == number1 && !prev.includes(".")) {
        number1 = number1 + ".";
      } else if (prev == number2 && !prev.includes(".")) {
        number2 = number2 + ".";
      }
    } else if (button.id == "back") {
      console.log(number1);
      console.log(number1.length, number2.length, oper.length);
      if (number2 != "" && number2.length != 0) {
        number2 = number2.slice(0, -1);
      } else if (oper.length != 0) {
        oper = oper.slice(0, -1);
      } else if (number1.length != 0) {
        number1 = number1.slice(0, -1);
      }
    } else if (button.id == "clear") {
      display("0");
      number1 = "";
      number2 = "";
      oper = "";
      flag = 0;
    } else if (button.id == "equals") {
      if (flag == 1) {
        number1 = operate(parseFloat(number1), parseFloat(number2), oper);
        number2 = "";
        oper = "";
        flag = 0;
        display(number1);
        temp = number1;
        number1 = "";
      }
      // display(number1);
    } else if (flag == 0 && !operators.includes(button.id)) {
      number1 += button.id;
      prev = number1;
      temp="0"
      display(number1);
    } else if (flag == 0) {
      if(temp!="0"){
        number1=temp
      }
      flag = 1;
      oper = button.id;
      prev = number2;
    } else if (flag == 1 && operators.includes(button.id)) {
      // console.log(oper);
      number1 = operate(parseFloat(number1), parseFloat(number2), oper);
      number2 = "";
      oper = button.id;
      prev = number2;

      // console.log(number1);
    } else {
      number2 += button.id;
      prev = number2;
      display(number2);
    }

    // display(number1 + oper + number2);
  });
});

// on external keybord
document.addEventListener("keydown", function (event) {
  if (event.key == ".") {
    if (prev == number1 && !prev.includes(".")) {
      number1 = number1 + ".";
    } else if (prev == number2 && !prev.includes(".")) {
      number2 = number2 + ".";
    }
  } else if (event.key == "Backspace") {
    console.log(number1);
    console.log(number1.length, number2.length, oper.length);
    if (number2 != "" && number2.length != 0) {
      number2 = number2.slice(0, -1);
    } else if (oper.length != 0) {
      oper = oper.slice(0, -1);
    } else if (number1.length != 0) {
      number1 = number1.slice(0, -1);
    }
  } else if (event.key == "clear") {
    display("0");
    number1 = "";
    number2 = "";
    oper = "";
    flag = 0;
  } else if (event.key == "Enter") {
    if (flag == 1) {
      number1 = operate(parseFloat(number1), parseFloat(number2), oper);
      number2 = "";
      oper = "";
      flag = 0;
      temp = number1;
      display(number1);
      number1 = "";
    }
  } else if (flag == 0 && !operators.includes(event.key) && valuess.includes(event.key)) {
    number1 += event.key;
    prev = number1;
    display(number1);
  } else if (flag == 0) {
    if (temp != "0") {
      number1 = temp;
    }
    flag = 1;
    oper = event.key;
    prev = number2;
  } else if (flag == 1 && operators.includes(event.key)) {
    number1 = operate(parseFloat(number1), parseFloat(number2), oper);
    number2 = "";
    oper = event.key;
    prev = number2;
  } else if (flag == 1 && valuess.includes(event.key)) {
    number2 += event.key;
    prev = number2;
    display(number2);
  }

  // display(number1 + oper + number2);
});
