// console.log("Namaste World");
// const array = [0,1,2,3];
// console.log(typeof(array));
// console.log(array[4]);
// const myarr = new Array(1,2,3,4);


// Array Methods 
/*
Push   ==> Push Element at last 
Pop    ==> Pop Element from last
Unshift ==> Shifts element by one index
Shift ==> Remove first element 

Includes 
Index of

join()
Slice & Splice 
*/

// const myn1 = new Array(1,2,3,4,5,6);
// // console.log(myn1);
// myn1.push(7);
// myn1.push(8);
// console.log(myn1);
// // myn1.pop();
// // myn1.pop();
// // console.log(myn1);

// myn1.unshift(3);
// myn1.unshift(9);
// console.log(myn1);

// myn1.shift();
// console.log(myn1);

// myn1.pop();
// console.log(myn1);

// console.log(myn1.includes(7));
// console.log(myn1.indexOf(7));


console.log("Slice Operation")

const myn2 = new Array(1,2,3,4,5,6);
const myn3 = myn2.slice(1,4);
console.log(myn3);
console.log(myn2);


console.log("Splice Operation")

const myn4 = myn2.splice(1,4);
console.log(myn4);
console.log(myn2);