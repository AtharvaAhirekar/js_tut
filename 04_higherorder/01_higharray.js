/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< For off Loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Objects can not be iterate through the For of Loop 







// const array = [1,2,3,4,5];
// for (const it of array) {
//     console.log(it);
// }

// const map = new Map ;
// map.set("IN" , "India");
// map.set("JP", "Japan");
// map.set("Rus" , "Russia")

// for (const data of map) {
//     console.log(data);
// }

// for (const [data , value] of map) {
//     console.log(data);
// }

// const obj1 = {
//     name : " Atharva " ,
//     age : 21 ,
//     Course : "B.tech"
// }

// for (const it of obj1) {
//     console.log(it);
// }


/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< For in Loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/
// Map is Not Iterable through "For in Loop"




// const obj1 = {
//     name : " Atharva " ,
//     age : 21 ,
//     Course : "B.tech"
// }

// for (const key in obj1) {
//     console.log(`${key} => ${obj1[key]}`);
// }

// const array = [101,201,301,401,501,601];
// for (const key in array) {
//     console.log(array[key]);
// }

// const map = new Map ;
// map.set("IN" , "India");
// map.set("JP", "Japan");
// map.set("Rus" , "Russia")

// for (const key in map) {
//     console.log(key);
// }


/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< For Each Loop  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



const myarr = [1,2,3,4,5] ;
// myarr.forEach(function (item){
//     console.log(item);
// })

// myarr.forEach((item) =>{
//     console.log(item);
// })

// myarr.forEach(function (item , index , arr) {
//     console.log(item , index , arr);
// })

// Object handling with For Each

const myobj = [
    {
        language : "CPP" ,
        file : ".cpp"
    },

    {
        language : "Java" ,
        file : ".js"
    },

    {
        language : "Python" ,
        file : ".py"
    }
]

myobj.forEach((key)=> {
    console.log(key.language);
})