// < , > , <= , >= , == , != , === , 
//if 
const isLoggedin = true;
const temperature  = 21

// if(isLoggedin){
//     console.log("hlo");
// }
// if(temperature < 50){
//     console.log("hlo");
// }
// const balance = 1000
// // if(balance > 500) console.log("test"),console.log("test2");
// if(balance <500){
//     console.log("less than");

// }else if(balance <750){
//     console.log("less than 750");
// }
// else{
//     console.log("equals");
// }
const userLoggedIn = true
const debitCard = true
const userLoggedIngoogle = false
const userLoggedIngmail = true
 if(userLoggedIn && debitCard){
    console.log("allowed to buy ");
 }
 if(userLoggedIngmail  || userLoggedIngoogle){
    console.log("user logged in");
 }
 // SWITCH case STATEMENT ////////
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
const month = 3
switch (month) {
    case 1:
        console.log("january");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;

    default:
        console.log("not matched");
        break;
}

const userEmail = "hemant@GMAIL.COM"
if(userEmail){
    console.log("got user gmail");
}else{
    console.log("dont get");
}
// falsy values : ---- false , 0 , -0,BIgint 0n , "" , null , undefined,nan
// and except these all are true values
// "0" , 'false' , " " , [],{},funtiona() {} 

// checking object is empty or not
const emptyobj = {}
if(Object.keys(emptyobj).length === 0 ){
    console.log("object is empty");
}

// nullish coalescing operator (??) : null undefined 
// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

// console.log(val1);

// terniary operator ///
// condition ? true : false
const iceTea = 100
iceTea <= 80 ? console.log("less than 80"): console.log("more than 80");;