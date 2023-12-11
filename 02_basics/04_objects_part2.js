// const symb = Symbol("1234");
// const user1 = {
//     fullname : {
//         userfullname :{
//             firstname : "bob",
//             lastname : "Alica",
//         }
//     },
//     id : "123abc",
//     age : 19 ,
//     spouse : "none",
//     [symb] : "123abc"
// }

// console.log(user1);
// console.log(user1.fullname.userfullname.firstname);
// console.log(user1.fullname.userfullname.lastname);

const a1  ={
    1:'a',
    2:'b'
}
const a2 = {
    3:'a',
    4:'b'
}
const a3 = {
    5:'a',
    6:'b'
}

const a4 = {...a1 , ...a2 , ...a3};

console.log(a4);

console.log(Object.keys(a4));
console.log(Object.values(a4));
console.log(Object.entries(a4));

console.log(a4.hasOwnProperty(9));
