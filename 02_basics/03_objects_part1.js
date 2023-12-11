// Singleton 
// Object.create

// Object Literals 

const symb = Symbol("Key1") ;

const user1 = {
    "name" : "Ram Dasrath" ,
    [symb] : "key1",
    Location : "Ayodhya",
    spouse : "Sita",
    brothers : ["Bharat" , "Laxman" , "Shatrughna"],
}

// console.log(user1);

user1.name = "Ram" ;
// Object.freeze(user1);
// console.log(user1.spouse);
// console.log(user1.Location);
// console.log(user1.brothers[0]);
// console.log(user1.name);
// console.log(user1[symb]);

console.log("......................................................");

console.log(user1);

console.log("......................................................");

user1.greetings = function(){
    console.log("Jay Shree Ram");
}

console.log(user1.greetings());

user1.greetingstwo = function(){
    console.log(`Jay ${this.spouse} ${this.name}`);
}

console.log(user1.greetingstwo());