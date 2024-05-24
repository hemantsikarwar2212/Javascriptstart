// let myName = "hemant   "

// console.log(myName.truelength);

let myHeros = ["thor","spiderman"]

let heroPower = {

    thor: "hammer",
    power:"sling",

    getspiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.hemant = function(){
    console.log(`hemant is present `);
}

Array.prototype.heyhemant = function(){
    console.log(`hey hemant`);
}
// heroPower.hemant()
myHeros.hemant()
myHeros.heyhemant()
// heroPower.heyhemant()

// inheritence
const user = {
    name:"hemant0",

}

const teacher ={
    makevideo : true,
    
}
const Ts ={
    isavailable :false,

}
const TAsupport ={
    makeAssignment:'js assignment',
     fullTime: true,
    __proto__:Ts
}
teacher.__proto__ = user

//modern syntax
Object.setPrototypeOf(Ts,teacher)
let anotherUsername = "chaiaurcode  "

String.prototype.truelength = function(){
    console.log(this);
    console.log(`true length is ${this.trim().length}`);

}
anotherUsername.truelength()
"anotherUsername".truelength()
"another".truelength()