function steamrollArray(arr) {
  const arrAnidado = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { 
      arrAnidado.push(...steamrollArray(arr[i]));
    } else {
        arrAnidado.push(arr[i]);
    }
  }
  return arrAnidado;
};

console.log(steamrollArray([1, [2], [3, [[4]]]]));