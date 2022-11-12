const A = ["Rhys","Rowan", "Manon", "Casteel", "Lorcan", "Feyra", "Nesta", "Alex", "Aelin", ]
function InsertionSort(array){
  for (let i=0; i < array.length; i++){
    let element = array[i];
    let prev_index = i-1;
     while(prev_index >=0 && array[prev_index] > element) {
       array[prev_index + 1] = array[prev_index]; prev_index--;}
       array[prev_index + 1] = element;
  }
 return A;
}
console.log(InsertionSort(A))