function stringToNumber(value){
  const quantityWithoutLetter = value.replace(/\D/g,'');
  return parseInt(quantityWithoutLetter, 10);
}

console.log(stringToNumber('frr15'));




 
