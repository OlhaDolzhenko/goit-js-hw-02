let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");

  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(input);
  }
} while (input !== null);

numbers.pop();

if (numbers.length > 0) {
  for (const number of numbers) {
    total += Number(number);
  }
}

console.log(`Общая сумма чисел равна ${total}`);
