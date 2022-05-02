function pairElement(str) {
  const newStr=[]
  for(let i=0; i<str.length;i++){
    if(str[i]==="G"){
      newStr.push(["G", "C"])
    } else if(str[i]==="C"){
      newStr.push(["C", "G"])
    } else if(str[i]==="T"){
      newStr.push(["T", "A"])
    } else {
      newStr.push(["A", "T"])
    }
  }
  return newStr;
}

console.log(pairElement("GCG"));