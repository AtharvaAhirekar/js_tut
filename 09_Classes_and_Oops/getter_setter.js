class user{
    constructor(email , password){
        this.email = email ;
        this.password = password
    }

    get email(){
        return this._emai.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value
    }
}

const atharva = new user("atharva@gmail.com" , "def")
console.log(atharva.password);