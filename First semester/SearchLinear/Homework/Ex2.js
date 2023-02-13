let users = [
     {index: 1, UserName: "Rowan Whitethorn", age: 325, title: "King-Consort of Terrassen", kills: 10001 },
     {index: 2, UserName: "Rhysand", age: 500, title: " The High Lord of the Night Court", kills:23000 },
     {index: 3, UserName: "Fenrys Moonbeam", age: 137, title: "The ambassador of Terrasen", kills: 10500 },
     {index: 4, UserName: "Cassian", age: 540, title: " General and Commander of the Night Court's armies", kills: 10040 },
     {index: 5, UserName: "Dorian Havilliard II", age: 19, title: "King of Adarlan", kills: 12000 },
 ]
function Search(Arr, key){
    for(let i=0; i < Arr.length; i++){
        if(Arr[i].index === key){
        console.log(Arr[i])
    }
   }
  return -1 
}
console.log(Search(users, 5))
