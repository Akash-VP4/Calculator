function operate(num1, num2, operator) {
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

let number1 = "";
let number2 = "";
let oper = "";
let flag = 0;
let dispContent = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "clear") {
      display("0");
      number1 = "";
      number2 = "";
      oper = "";
      flag = 0;
    } else if (button.id == "=") {
      if (flag == 1) {
        number1 = operate(parseInt(number1), parseInt(number2), oper);
        number2 = "";
        oper = "";
        flag = 0;
      }
      display(number1);
    } else if (flag == 0 && !operators.includes(button.id)) {
      number1 += button.id;
    } else if (flag == 0) {
      flag = 1;
      oper = button.id;
    } else if (flag == 1 && operators.includes(button.id)) {
      console.log(oper);
      number1 = operate(parseInt(number1), parseInt(number2), oper);
      number2 ="";
      oper = button.id;
      console.log(number1);
    } else {
      number2 += button.id;
    }

    display(number1 + oper + number2);
  });
});
