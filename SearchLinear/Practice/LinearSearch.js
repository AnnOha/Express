let Arr = [3,4,10,13,33,10,16,16,16]
function linearSearch(Arr){
    for(let i=0; i < Arr.length; i++){
        if(Arr[i]= 13){
        return i
    }
  }
}

function mySearch(Arr, target){
    for(let i=0; i < Arr.length; i++){
        if(Arr[i] === target){
        return i
     }
}
    return -1
}
console.log(mySearch(Arr, 13))