let users = [ 
    {Name: "Fenrys Moonbeam", age: 137},
    {Name: "Dorian Havilliard II", age: 19},
    {Name: "Cassian", age: 540},
    {Name: "Rowan Whitethorn", age: 325},
    {Name: "Rhysand", age: 500 },
    {Name: "Azriel", age: 538},
    {Name: "Casteel", age: 202 },
    {Name: "Sam Cortland", age: 18 },
   
]

function InsertionSort(array){
    for (let i=0; i < array.length; i++){
      let element = array[i];
      let prev_index = i-1;
       while(prev_index >=0 && array[prev_index] > element) {
         array[prev_index + 1] = array[prev_index]; prev_index--;}
         array[prev_index + 1] = element;
    }
   return users;
  }

 function searchbyAge(users, age){
    InsertionSort(users)
    let first=0; 
    let last = users.length -1; 
   
    while (first <= last) {
    let middle = Math.floor((first + last) / 2);

    if (users[middle].age === age) {
      console.log(`${age} years old is ${users[middle].Name}`)
      break;
    } else if (users[middle].age < age) {
        first = middle + 1;
    } else {
        last = middle - 1;
    }
  }
  return -1;
}
 
console.log(searchbyAge(users, 18))