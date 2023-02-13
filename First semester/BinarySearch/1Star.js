let users = [
    {Name: "Dorian Havilliard II", age: 19},
    {Name: "Fenrys Moonbeam", age: 137}, 
    {Name: "Rowan Whitethorn", age: 325},
    {Name: "Rhysand", age: 500 },
    {Name: "Cassian", age: 540},
]

 function searchbyAge(age, users){
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
 
console.log((searchbyAge(325, users)))

