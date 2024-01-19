class user {
    constructor(username){
        this.username = username 
    }

    logme(){
        console.log(`logged in by user : ${this.username}`);
    }

    static createid(){
        return 123;
    }
}

const karan = new user('karan')
karan.logme()
// console.log(karan.createid());

class teacher extends user {
    constructor(username , email){
        super(username)
        this.email = email 
    }
}

const user1 = new teacher('user1' , 'user1@acebook.com')
user1.logme()
// user1.createid()