console.log("Namaste World") ;
console.log("Say Jay Shree Ram");


// Push = Push element at last 
// POP = Pop element from last 
// Unshift = Insert element at first 
// Shift = Remove First element 
// Join = Convert to String 
// Splice = Get a subset / Subarray 
// Slice = Get a subset by manipulating the array 
// Diff btw Slice and Splice ==> Slice just gives a Subset  &&&& Splice Manipulate the Array and removed the given range 
// Concate = Merge two arrays 
// Spread = Merge two or more then Two array 
// if we have array in array in array (i.e subarrays with in one array) then we can use flat
// To convert any other data structure in array we can use Array.from("Hanuman");
// To get the array of different variabels then we can use Array.of(var1 , var2 , var3)



const arr1 = [1,2,3,4,5];
// console.log(arr1);

// const arr2 = new Array(1,2,3,4,5);
// console.log(arr2);

arr1.push(9);
// console.log(arr1);
// arr1.unshift(100);
// console.log(arr1);
// arr1.shift();
// console.log(arr1);

// console.log(arr1);
// const newarray = arr1.join(',');
// console.log(newarray);

// const let1 = arr1.slice(1,3); // Include from 1 and Exclude the 3 
// console.log('A ',arr1);
// console.log('a ',let1);

// const let2 = arr1.splice(1,4); // Removes the element or Manipulate the Original Array
// console.log('B ',arr1);
// console.log('b ',let2);

// console.log(arr1[1]);



// const mahabharat = ["ShriKrishna" , "Radha" , "Arjun" , "Dropadi"];
// const ramayan = ["Shri Ram" , "Sita" , "Hanuman" , "Laxman"] ;

// console.log(mahabharat);
// console.log(ramayan);

// const prabhulila = mahabharat.concat(ramayan);
// console.log(prabhulila);

// console.log(prabhulila[4]); 

// const arry3 = [1,2,3,[4,5,6],[7,8,9]];
// const mynewarray = arry3.flat(Infinity);
// console.log(mynewarray);

console.log(Array.isArray("Hanuman"));
const arry5 = Array.from("Hanuman");
console.log(arry5);