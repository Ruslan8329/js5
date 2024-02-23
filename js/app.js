let user1 = prompt("Введите начальное число");
let user2 = prompt("Введите конечное число");
let sum = 0;

if (user1 <= user2) {
  for (let i = user1; i <= user2; i++) {
    sum += i;
  }

  alert(sum);
}

//////////////////////////////////////////////////////////

let num1 = prompt("Введите первое число");
let num2 = prompt("Введите второе число");

if (num1 <= num2) alert(`Наибольший делитель ${num2}`);
else num2 <= num1;
alert(`Наибольший делитель ${num1}`);

////////////////////////////////////////////////////

let user5 = prompt("Введите числа");

alert(user5.length);

//////////////////////////////////////////
let even = 0;
let odd = 0;
let positiveNum = 0;
let negativeNum = 0;
let zeroNum = 0;
let counter = 0;

do {
  let userOne = parseInt(prompt("Введите число"));
  console.log(userOne);

  if (userOne > 0) {
    positiveNum += 1;
    console.log("positive");
  }

  if (userOne < 0) {
    negativeNum += 1;
    console.log("negative");
  }

  if (userOne === 0) {
    zeroNum += 1;
    console.log("zero");
  }
  counter += 1;
} while (counter < 10);

console.log("negative", negativeNum);
console.log("positive", positiveNum);
console.log("zero", zeroNum);

///////////////////////////////////////////////////////////////
let conter = 0;
while (true) {
  let firstNum = parseInt(prompt("Введите первое число"));

  if (firstNum === null || isNaN(firstNum)) {
    console.log("Отмена");
    break;
  }
  let operator = prompt("Выберите один оператор: \n+ \n -\n *\n /");
  let secondNum = parseInt(prompt("Введите второе число"));

  switch (operator) {
    case "+":
      console.log("Ответ:", firstNum + secondNum);
      break;
    case "-":
      console.log("Ответ:", firstNum - secondNum);
      break;
    case "*":
      console.log("Ответ:", firstNum * secondNum);
      break;
    case "/":
      console.log("Ответ:", firstNum / secondNum);
      break;
  }
  conter += 1;
}
