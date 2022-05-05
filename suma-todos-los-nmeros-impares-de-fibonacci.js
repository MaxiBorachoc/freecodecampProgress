function sumFibs(num) {
  let previo = 0;
  let current = 1;
  let result = 0;
  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }
    current += previo;
    previo = current - previo;
  }

  return result;
}

console.log(sumFibs(4));