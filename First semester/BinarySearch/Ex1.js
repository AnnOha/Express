let A = [1,3,7,9,15,23,45,56,75,86,95]
function binarySearch(A, key){
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
console.log(binarySearch(A, 23))