const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
  let total = 0;
  for (let num of numberList) {
    total += num;
  }
  return total;
}

console.log(sumNumbers(numbers)); 
