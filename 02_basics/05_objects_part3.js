const user1 = {
    "name" : "Ram Dasrath" ,
    Location : "Ayodhya",
    spouse : "Sita",
    brothers : ["Bharat" , "Laxman" , "Shatrughna"],
}

console.log(user1.spouse);
const{Location} = user1 ;
console.log(Location);
const{Location : lc} = user1 ;
console.log(lc);
