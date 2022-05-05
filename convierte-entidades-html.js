function convertHTML(str) {
  const carac = ['&', '<', '>', '"', "'"]
  const entitys = ['&amp;', '&lt;', '&gt;', '&quot;', "&apos;"]
  for(let i=0; i<str.length; i++){
      for(let j=0; j<carac.length;j++){
        if(str[i]===carac[j]){
          str = str.replace(str[i], entitys[j])
        }
      }
  }
  return str;
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("<>"));