const Names = ["Rhys", "Christian" , "Rowan", "Manon", "Casteel", "Lorcan", "Feyra", "Nesta", "Alex", "Aelin", "Lea" ];

function InsertionSort(Names){
    for (let prev_in = 0; prev_in < Names.length; prev_in ++){
      for (let index = 0; index < Names.length - 1; index ++){
        if (Names[index][1] > Names[index + 1][1]){
          const result = Names[index]
          Names[index] = Names[index + 1]
          Names[index + 1] = result
        }
      }
    }
    return(Names)
  }
  
  console.log(InsertionSort(Names));