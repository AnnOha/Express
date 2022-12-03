function InsertionSort(array){
  debugger
  for (let i=0; i < array.length; i++){
    let element = array[i];
    let prev_index = i - 1;
    while(prev_index >= 0 && array[prev_index].age > element.age) {
      array[prev_index + 1] = array[prev_index]; 
      prev_index--;
    }
    array[prev_index + 1] = element;
  }

  return array;
}


function searchbyAge(users, age){
  let sorted_users = InsertionSort(users);
  let first = 0; 
  let last = sorted_users.length - 1;
  let searched_object;

  while (first <= last) {
    let middle = Math.floor((first + last) / 2);
    
    if (sorted_users[middle].age == age) {
      console.log(`${age} years old is ${sorted_users[middle].Name}`)
      searched_object = sorted_users[middle];
      break;
    } else if (sorted_users[middle].age < age) {
        first = middle + 1;
    } else {
        last = middle - 1;
    }
  }

  return searched_object ? searched_object : 'No object found';
}
 

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
console.log(searchbyAge(users, 33))