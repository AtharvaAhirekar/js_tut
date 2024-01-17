// function userdetails(username , score){
//     this.username = username
//     this.score = score
    
// }


// const userone = userdetails('Atharva',56)
// const usertwo = userdetails('Harish',85)

// userdetails.prototype.printing = function(){
//     console.log(`Score is ${this.score}`)
// }

// const userone = new userdetails('Atharva',56)
// const usertwo = new userdetails('Harish',85)


// userone.printing()
// usertwo.printing()

function clientdetails(clname , points){
    this.clname = clname ;
    this.points = points ;

    return this
}

const clientone = new clientdetails('Rohit' , 500)
const clienttwo = new clientdetails('Virat' , 450)
console.log(clientone.clname);
console.log(clienttwo.points);

clientdetails.prototype.scoreprint = function(){
    console.log(`The points of ${this.clname} is ${this.points}`);
}

clientone.scoreprint() ;