function removeZ(arr) {
    let combinedString = arr.join(""); 
    return combinedString.replace(/z/g,"").replace(/Z/g,""); 
  }
  
    module.exports = removeZ 