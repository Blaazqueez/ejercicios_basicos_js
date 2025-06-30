const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const countMap = {};
  for (let word of list) {
    if (countMap[word]) {
      countMap[word]++;
    } else {
      countMap[word] = 1;
    }
  }
  return countMap;
}

console.log(repeatCounter(words));

