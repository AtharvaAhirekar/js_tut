
// Although The For each loop cannot return any Value so for returning any value with respect to any condition we will require to use Filter 
// Filter opeartion used to return the value which is not done by for each loop 


/* Cannot Return the Value */
// const array = [1,2,3,4,5];
// array.forEach((item) => {
//     console.log(item);
// })

 
                    /* <<<<<<<<<<<<<<<<<<<<<<<<<<<< Filter Operation >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// const array = [1,2,3,4,5,6,7,8,9,10];
// const letnum = array.filter((num) => (num >= 4)) ;
// console.log(letnum);


// const letnums = array.filter((num) => {
//     return (num >= 2)
// }) ;

// console.log(letnums);

// const getnum = []

// array.forEach( (num) => {
//     if(num > 4){
//         getnum.push(num);
//     }
// })

// console.log(`${getnum} is an updated array`);

// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const userbooks =  books.filter((bk) => {
//     return (bk.genre === "History");
//   })

// const userbooks = books.filter((item) => (item.publish >= 1995 && item.genre == "History"))

//   console.log(userbooks);



/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Map >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

// const ar1 = [1,2,3,4,5,6,7,8,9,10];

//  const newnums = ar1.map( (num) => (num+10));


 // Chaining ======================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

 // const newnums = ar1.map((num) => (num*10)).map((num) => num+1).filter((num) => (num >= 50))
 // console.log(newnums);


 /* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Reduce >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/

//  const arr1 = [1,2,3];
//  const sums = arr1.reduce((acc , cv) => (acc+cv),0);
//  const sumss = arr1.reduce(function (acc , cv) {
//     return (acc+cv);
//     0 ;
//  })
//  console.log(sums);
//  console.log(sumss);

const arr1 = [1,2,3];
const sums = arr1.reduce((acc , cv) => (acc+cv) ,0);
console.log(sums) ;

const arr2 = [1,2,3,4,5,6,7,8,9,10];
const sums1 = arr2.reduce(function(acc , cv) {
    return (acc+cv);
    0 ;
})

console.log(sums1);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const pricetopay = shoppingCart.reduce((acc , item)=>( acc + item.price),0)

console.log(pricetopay);