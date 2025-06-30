const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  if (numberList.length === 0) return 0; 
  let total = 0;
  for (let num of numberList) {
    total += num;
  }
  return total / numberList.length;
}

console.log(average(numbers)); 
