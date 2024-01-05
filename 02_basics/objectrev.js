// Singleton 

// Declare 
// accessed by "." or obj1["name"]
// Freeze = To Frezze the value of any key in the Object 
// this operator use to get the variable which exist with in declared scope 


const mysym = Symbol("mykey1")

const obj1 = {
    name : "Krishna" ,
    Full_name : "Krishna Vasudev Yadav" ,
    age : 21 ,
    Address : "Dwarka" ,
    Wives : 16108,
    [mysym] : "mykey1.1.1"
}

// console.log(obj1.Full_name);
// console.log(obj1.Wives);
// console.log(obj1.name)
// console.log(obj1[mysym]);
// console.log(typeof obj1[mysym]);
// console.log("...........................");
// console.log(obj1["name"]);

// Object.freeze(obj1);
console.log(obj1);

obj1.greeting = function(){
    console.log(`Hare  ${this.name} hare ram`)
}

console.log(obj1.greeting())
