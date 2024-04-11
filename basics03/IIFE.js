// TO AOVID THE POLLUTION OF GLOBAL SCOPE WE USE IIFE

(function chai() {
    console.log("DB CONNECTED ")
    
})();

( (name) => {
    console.log(`db connect ${name}`);
}
)()
 
const myfun =  function(num1,num2){
    return num1+num2

} 

const fun2 = () => {
    user="hemant "
    console.log(user);
    
}
fun2()