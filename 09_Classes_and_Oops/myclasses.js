class User {
    constructor(username , email , password ){
        this.username = username 
        this.email = email 
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    getallcaps(){
        return`${this.username.toUpperCase()}`
    }
}

const atharva = new User("atharva" , "atharva@gmail.com" , 123)
console.log(atharva.encryptPassword());
console.log(atharva.getallcaps());