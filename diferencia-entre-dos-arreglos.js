function diffArray(arr1, arr2) {
  const arr = arr1.concat(arr2);
  const newArr = arr.filter(element => {
    if(arr1.includes(element) && arr2.includes(element)){
    }
    else{
      return element
    }
  })
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);