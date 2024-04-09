// const sym = Symbol("key1")

// const obj = {
//     Name : "hemant sikarwar",
//     age : 18,
//     Location: "agra",
//     [sym] : "key" ,
//     email : "hemant@gmail.com"    

// }
//  console.log(obj["age"]);
//  console.log(obj[sym]);
const instaUser = new Object()
instaUser.name = "Hemant sikarwar"
instaUser.age = "18"
instaUser.sym = Symbol("key1")
instaUser.isLoggedIn = "true"

// console.log(instaUser);
const regularUser = {
    email : "hemantsikarwar@gmail.com",
    fullname : {
        userFullname:{
          Name:"hemant",
          lastname:"sikarwar"
    }
}

}
// console.log(regularUser.email);

const obj1 = {1:"a",2:"b",3:"c"}
const obj2= {4:"d", 5:"e",6:"f"}

// obj3 = {obj1,obj2}
const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2}
// console.log(obj3);


const users = [
    {

    },
    {

    },
    {}
]
users[1].age
console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));

