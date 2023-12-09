// Stack ==> Primitive data types ==> Number , String , NULL , UNDEFINED , Symbol 
// HEAP ==> Non Primitive data types ==> Function , Object , Array


// Stack Memory  ==> Call by Value
let coursename = "B.E" ;
let coursename1 = coursename ;

console.log(coursename);
coursename1 = "B.TECH" ;
console.log(coursename1);

// Heap Memory  ==> Call by Refrence

let userone = {
    email : "userone@gmail.com" ,
    id : "abc123",
}

let usertwo = userone ;
console.log(userone.email);

usertwo.email = "unknown@gmail.com";

console.log(userone.email);
console.log(usertwo);

