"use strict";


let num1 = +prompt('Введите первое число');

let num2 = +prompt('Введите второе число');


while (num1 === 0 || isNaN(num1) || num2 === 0 || isNaN(num2)) {

  num1 = +prompt('Введите первое число', num1);

  num2 = +prompt('Введите второе число', num2);

}


let operator = prompt('Введите какую  операцию выполнить с введеными вами числами: + ,или  - ,или * ,или / ');


while (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {

  operator = prompt('Введите какую операцию выполнить с введеными вами числами: + ,или  - ,или * ,или / ');

}

let calcResult = () => {

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


