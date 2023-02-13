let A = [4,1,3,88,9,8,16,6,74,97,100]

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

function binarySearch(A, key){
    InsertionSort(A)
    let i=0; 
    let j= A.length -1; 
    let indx = -1; 
    let middle;
    while (i<=j) {
        middle  = Math.floor((i+j)/2);
            if(A[middle] == key){
                indx = middle;
                break;
            }
            if(A[middle] > key){
                j = middle - 1
            }else{
                i = middle + 1
            }
    }
    return indx;
 }
console.log(binarySearch(A,16))