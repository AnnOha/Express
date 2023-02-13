let A = [1,3,7,9,15,23,45,56,75,86,95]
function binarySearch(A, number) {

    function recursiveSearch(first, last) {
      let middle = Math.floor((first + last) / 2);
      if (first > last) {
        return -1;
      }
      if (A[middle] === number) {
        return middle;
      }
      if (A[middle] > number) {
        return recursiveSearch(first, middle - 1);
      }else{
        return recursiveSearch(middle + 1, last);
      }
    }
    return recursiveSearch(0, A.length - 1);
  }

console.log(binarySearch(A, 95));



















