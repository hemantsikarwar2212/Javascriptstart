//primitive and non primitive 

// 7 types : string ,number,boolean,null ,underfined,symbol,BigInt

const score = 100
const id = Symbol('123')
const anoid = Symbol('123')
console.log(id===anoid);


// refernce (non primitive)

// array, objects , fuctions

const heros = ["antman" , "shaktiman","bheem"]
 let myobj = {
    name : "hemant",
    age : 22,
}
const myfun = function(){
    console.log("hlo world")
}
 console.log(myfun())
 console.log(typeof myfun);