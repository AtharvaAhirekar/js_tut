console.log(Object.getOwnPropertyDescriptor(Math , "PI"));

const userdetails = {
    name : "user1",
    price : 250 ,
    isAvailable : true 
}

console.log(Object.getOwnPropertyDescriptor(userdetails , 'price'));

// Object.defineProperty(userdetails , 'price' , {
//     writable: false ,
//     enumerable : false 
// })

// console.log(Object.getOwnPropertyDescriptor(userdetails , 'price'));

for (const [key , value] of Object.entries(userdetails)) {
    console.log(`${key} : ${value}`);
}

Object.defineProperty(userdetails , 'price' , {
    writable: false ,
    enumerable : false 
})

// console.log(Object.getOwnPropertyDescriptor(userdetails , 'price'));

for (const [key , value] of Object.entries(userdetails)) {
    console.log(`${key} : ${value}`);
}