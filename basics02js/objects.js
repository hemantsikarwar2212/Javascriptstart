// singleton : when we create with constructor the it is created as singleton
// when we declare as literals it is not create as singleton

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name:"hemant",
    "full name" : "SIkarwar",
    [mySym] : "mukey1"
    ,age : 18,
    location : "Jaipur"
    ,email:"hemant@gamil.com"
    ,isLoggedin :false,
    lastLoggedin : ["Monday","wednsday"]

}
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "hemant@google.com"
Object.freeze(jsUser)

0