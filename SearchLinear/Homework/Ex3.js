let number = [[4,8,15,13,35], [382,5,122,7,9], [12,23,712,12,922,33], [2,11,62,832], [6,99,105,71,53,65,3,1]]

function find(Arr, key){
  for (let index_mas = 0; index_mas < Arr.length; index_mas++)
  for (let index_num = 0; index_num < Arr[index_mas].length; index_num++){
    if (Arr[index_mas][index_num] === key){
      return '['+index_mas+']['+index_num+']'
    }
  }
  console.log(Arr[1].length)
  return -1
}

console.log(`Position: ${find(number, 1)}`)