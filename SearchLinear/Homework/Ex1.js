function linearSearch(arr, key){
    for(let i=0; i < arr.length; i++){
        if(arr[i] === key){
        return i
    }
  }
  return -1
}
 let i = [500, 200, 2 , 3, 95, 15]
 console.log(linearSearch(i, 200))