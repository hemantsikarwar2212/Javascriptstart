function myName (){
     console.log("hemant");
     console.log("hemant");
     console.log("hemant");
     console.log("hemant");
     console.log("hemant");

 }
// myName();
// when we pass values to functions it is called parameters
//and when we pass values to functions call it is called arguemnents

// function addTwonum(num1,num2){
//        console.log( num1+num2);
// }
function addTwonum(num1,num2){
    //    let result = num1+num2;
    //    return result; 
    return num1+num2
// }
// console.log(addTwonum(5,5));
}

function  loginMessage(username="laikhu"){
    if(!username){
            console.log("please enter a username");
            return 
    }
    return `${username} just loggedIn`
}
console.log(loginMessage());

function calculateCartPrice (val1,val2,...num4){
    return num4


}
console.log(calculateCartPrice(200,400,600));
const user = {
    username : "hemant",
    price: 199
}
function handleObject (anyobj){
    console.log(`username us ${anyobj.username} and price is ${anyobj.price}`);

}
handleObject(
    {
        username : "sam"
,        price:633
    }
)
const myarr =[200,800,600]
function returnSecondVal(getArr){
    return getArr[1]
}
console.log(returnSecondVal(myarr));
console.log(returnSecondVal([100,500,960]));