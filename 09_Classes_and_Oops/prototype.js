// let dharma = ["Mahabharat" , "Ramayan"]

// let weapons ={
//     Mahabharat : "Sudarshan-Chakra" ,
//     Ramayan : "Dhanushya-ban",

//     getweapons : function(){
//         console.log(`Vishun bhagwan used ${this.Mahabharat} in Mahabhrat`);
//         console.log(`Vishnu Bhagwan used ${this.Ramayan} in Ramayan`);
//     }
// }

// Object.prototype.brother = function(){
//     console.log(`Shesh-Nag is always with the bhagwan`);
// }

// console.log(weapons.Mahabharat);
// console.log(weapons.Ramayan);
// weapons.brother()

// Array.prototype.strishakti = function(){
//     console.log(`Stree hi Shakti hee`);
// }

// weapons.strishakti( )
// dharma.strishakti()

// Inheritance 

// const User = {
//     name : 'chai',
//     email : 'chai@google.com'
// }

// const teacher = {
//     makevideo : true 
// }

// const teachingsupport = {
//     isAvailable : false  
// }

// const TAsupport = {
//     makeAssignment : 'JS Assignment',
//     fulltime : true ,

//     __proto__ : teachingsupport 
// }
// teacher.__proto__ = User

// console.log(teacher.name);

//  Modern Syntax 
// Object.setPrototypeOf(teachingsupport , teacher)

// console.log(teachingsupport.name);

// Assignment ==> Get a True length of the String 
let str = "Users                 "
console.log(str.length);
String.prototype.truelength = function(){
    return(this.trim().length)
}
console.log(str.truelength());

console.log(" Atharva ".truelength());