const ramayan = [ "Sita", "Ram" , "Laxman"]
// console.log(ramayan);
const mahabharat = ["Radha","Krishna","Balram"]
// console.log(mahabharat);

// ramayan.push(mahabharat)
// console.log(ramayan);

const history = ramayan.concat(mahabharat);
console.log(history);

const litreature = [...mahabharat,...ramayan];
console.log(litreature);

const arry1 = [1 , 2 , 3 , [4,5,6] , 7 , 8 , [9 , 10 , [11 , 12 , 13]] , 14]
console.log(arry1.flat(Infinity));

const array2 = "Hanuman" ;
console.log(Array.isArray(array2));
console.log(Array.from(array2));

let s1 = 100 ;
let s2 = 200 ;
let s3 = 300 ;

let newarr = Array.of(s1 , s2 , s3);
console.log(newarr);