function sumAll(arr) {
  arr.sort(function(a, b){return a - b})
  let sum = 0
  let prim = arr[0]
  let ult = arr[arr.length - 1];
  for(let i=prim; i <= ult; i++){
    sum+= i
  }
  return sum;
}

console.log(sumAll([10,5]));

