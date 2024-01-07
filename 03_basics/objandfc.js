/*
function name(username = "user1"){ <== Default Value 
    return username
}
*/

// REST OPERATOR  = used to get multiple input when we dont know the number the inputs which are coming
// Syntax = (... num1)


// const obj1 = {
//     name:"Atharva",
//     id : "abc123",
//     age : 89
// }
// console.log(obj1.name);
// console.log(obj1);

// function printing(){
//     console.log("S");
//     console.log("H");
//     console.log("R");
//     console.log("I");
//     console.log("R");
//     console.log("A");
//     console.log("M");
// }
// printing();

// function addnum(number1 , number2){
//     return number1+number2 ;
// }

// console.log(addnum("3",4))

// function printing(username = "user1"){

//     if(!username){
//         console.log("Enter the Valid Name");
//         return ;
//     }

//     console.log(`${username} just logged in`);
// }

// printing();

// function shoppintcart(val1 , val2 ,...num1){
//     return num1;
// }

// console.log(shoppintcart(200 , 400 , 600 , 800 , 1000));
const obj1 = {
    username : "Atharva",
    price : 100 
}

function objectdata(anyobject){
    console.log(`The username is ${anyobject.username} and the priced paid is ${anyobject.price}`);
}

objectdata(obj1)

objectdata({
    username : "Harish",
    price : 200 
})

const myarr = [100,200,300,400,500];

function getarray(arr1){
    console.log(arr1[1]);
}

getarray(myarr);

getarray([500,900,1500,2000])

