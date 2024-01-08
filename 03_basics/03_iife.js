// Immediately Invoked Function Expression (IIFE)
// To avoid pollutation of variable due to Scoping

// (function ramayan(){
//     console.log("Jay Shree Ram");
// })() ;

// (function mahabharat() {
//     console.log("Jay Shree Krishna");
// })();

// (()=>{
//     console.log("Jay Sita Ram");
// }) () ;

// ((username)=>{
//     console.log(`${username} , welcome to website`);
// })("user1") ;

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<For Loop>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
const array = ["Ram","Laxman","Janki","Jay","khnaya","Lal" ,"ki"]
// for (let index = 0; index < array.length; index++) {
//     if(array[index] == "Jay"){
//         continue ;
//     }
//     console.log(array[index]);
   
// }

// let index = 0 ;
// while (index < array.length) {
//     console.log(array[index])
//     index++;
// }

let score = 0 ;
do{
    console.log(score);
    score++;
}while(score<=10)