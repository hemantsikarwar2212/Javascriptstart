
// console.log(a);
if(true){
    let a = 5
    var b = 2
    const c =9

}
//can use before or after
addone(6)
 function addone(num1){
    return num1+1


}

//cannot acces above or before initialization 
// addtwo () cannot use 
const addtwo = function(num){
    return num+2
    
}
addtwo(5)
//THIS KEYBOARD //
const user = {
    username : "hemant"
    ,price: 999

    ,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to this site`);
        console.log(this);
    }
}
//  user.welcomeMessage()
//  user.username = "laikhu"
//  user.welcomeMessage()
//  console.log(this);
 /////value of this in node environment gives "{}" and in browser it gives window object 


//  function chai (){
//     let username = "hemant sikarwar"
//     console.log(this.username);//we cannot use this keyword inside the functions
//  }
//  chai()

// const chai = function(){
//     let username = "mainsh"
//     console.log(this.username); // cannot be used can give undefined
// }
// chai()
// const chai = () =>{
//     let username = "mainsh"
//     console.log(this); 
// }
// chai()

///////////////////////ARROW FUNCTION //////////////////////
//syntax 
//() =>{}
// const addtwo1 = (num6,num7) =>{
// return num6+num7
// }
//implict return
// const addtwo1 = (num6,num7) => (num6+num7)
const addtwo1 = (num6,num7) => ({username : "hemant"})


const myarr = [2,5,64,8,9,8]
console.log(addtwo1(5,5));