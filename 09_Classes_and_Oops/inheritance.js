class user {
    constructor(username){
        this.username = username
    }

    logme(){
        console.log(`${this.username}`);
    }
}

class teacher extends user {
    constructor(name , id , password){
        super(name)
        this.id = id
        this.password = password
    }

    addcourse(){
        console.log(`A new Course was added by ${this.username}`);
    }
}

const karan = new teacher('atharva' , 123 , 'abc123')
const naman = new teacher('naman' , 456 , 'abc456')

karan.addcourse()
naman.addcourse()
karan.logme()

console.log(user instanceof teacher);