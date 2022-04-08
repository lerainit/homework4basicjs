"use strict";


let num1 = +prompt('Enter first number');

let num2 = +prompt('Enter second number');


while (num1 === 0 || isNaN(num1) || num2 === 0 || isNaN(num2)) {

  num1 = +prompt('Enter first number', num1);

  num2 = +prompt('Enter second number', num2);

}


let operator = prompt('Введите операцию с числами: + или  - или * или /');


while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {

  operator = prompt('Введите операцию с числами: + или  - или * или /');

}

let calcResult = (num1,num2,operator) => {

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;

  }
}

console.log(calcResult());


