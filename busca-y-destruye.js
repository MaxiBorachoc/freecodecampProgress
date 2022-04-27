function destroyer(arr) {
  const newArr =[];
  for(let i=1; i<arguments.length;i++){
    newArr.push(arguments[i])
  }
  return arr.filter(element=>!newArr.includes(element))
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));