// function setUsername(username){
//     this.username = username
//     console.log('called');
// }

// function createusername(username , email , password){

//     setUsername.call(this,username)
//     // this.username = setUsername(this.username)
//     this.email = email 
//     this.password = password

// }

// const chai = new createusername("chai" , "chai@facebook.com" , "123")
// console.log(chai);

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=> We use Call to get or pass the Current Execution Context to another function <=>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function getusername(username){
    this.username = username
}

function createuser(username , email , password){

    getusername.call(this,username)
    this.email = email 
    this.password = password
}

const chai = new createuser("chai" , "chai@facebook.com" , 1234)

console.log(chai);