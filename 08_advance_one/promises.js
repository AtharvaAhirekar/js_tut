// const promiseone = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async Task is complete');
//         resolve()
//     },4000)
//     console.log('Checking before execution');
// })
// promiseone.then(function(){
//     console.log('Promise Consumed');
// })
// new Promise(function(resolve , reject){
//     setTimeout(function(){
//         console.log('Async Task2 is Complete');
//         resolve()
//     },2000)
//     console.log('Checking before execution2');
// }).then(function(){
//     console.log('Promise2 Consumed');
// })

// const premise2 = new Promise(function(resolve , reject){
//     setTimeout(() => {
//         console.log('Async two task');
//         resolve ({username :'Atharva' , id : '123'})
//     }, 1000);
// })
// premise2.then(function (user) {
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true;
//         if (!error) {
//             resolve({username: "Atharva", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('The Promise is either resolved or rejected');
// })

// const promise5 = new Promise(function(resolve , reject){
//     setTimeout(function(){
//         let error = true ;
//         if(!error){
//             resolve({username : 'Javascript' , id:'123'})
//         }else{
//             reject('ERROR !! JS Not Found');
//         }
//     } , 1000)
// })

// async function consumepromise(){
//     try {
//         const responce = await promise5
//         console.log(responce);
//     } catch (error) {
//         console.log('Error Found');
//     }
// }
// consumepromise()

// async function getalluser(){
// try {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/users/')
//     const data = await responce.json()
//     console.log(data);
// } catch (error) {
//     console.log("E : " , error);
// }
// }

// getalluser()


fetch('https://jsonplaceholder.typicode.com/users/')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log('Error');
})