const A = [15,2,6,8,9,122,99,11, 45,-1,-30, 87, -9, 18, 5, 34];

function InsertionSort(array){
  for (let i=0; i < array.length; i++){
    let element = array[i];
    let prev_index = i-1;
     while(prev_index >=0 && array[prev_index] > element) {
       array[prev_index + 1] = array[prev_index]; prev_index--;
    }
    array[prev_index + 1] = element;
  }
 return array;
}

function RemoveOddNumbers(array){
    let length = array.length
    for( let i=0; i <= length; i++){
        if(array[i] % 2 === 0) {
            array.splice(i, 1);
            length--;
            i--;
        }
    }
    return array;
}
console.log(RemoveOddNumbers(InsertionSort(A)))