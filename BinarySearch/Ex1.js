let A = [4,1,3,88,9,9,16,6,74,97,100]
 function binarySearch(A, key){
    let i=0; 
    let j= A.lenght -1; 
    let indx = -1; 
    let middle
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
  console.log(binarySearch(A,22))