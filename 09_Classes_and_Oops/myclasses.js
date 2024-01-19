// class User {
//     constructor(username , email , password ){
//         this.username = username 
//         this.email = email 
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     getallcaps(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const atharva = new User("atharva" , "atharva@gmail.com" , 123)
// console.log(atharva.encryptPassword());
// console.log(atharva.getallcaps());

// Traditional Method 

function employee(clientname , email , password){
    this.clientname = clientname
    this.email = email 
    this.password = password
}

employee.prototype.getencryptPassword = function(){
    return(`${this.password}`);
}
employee.prototype.getallcaps = function(){
    return(`${this.clientname}`);
}

const emp1 = new employee('Karan','karan@google.com',123)
console.log(emp1.getencryptPassword());
console.log(emp1.getallcaps());