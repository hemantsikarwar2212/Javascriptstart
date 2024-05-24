const user = {
    username: "hemant",
    loginCount : 7,
    singedIn : true,

    getUsersDetail : function(){
        console.log("got the details");
        console.log(this);

    }

}
// console.log(user.username);
// console.log(user.getUsersDetail());
//console.log(this)


//constructor function
// const promiseOne = new Promise()
// const date = new date()

function userr(username,logincount , isLoggedIn){
    this.username = username;
    this.loginCount = logincount
    this.isLoggedIn = isLoggedIn
    // return this it is already defined  no need to write
}

// const userOne = user("hemant",12,true)
// const userTwo = user("any",10,false)

const userOne =new userr("hemant",12,true)
const userTwo =new userr("any",10,false)
console.log(userOne);
console.log(userTwo);
//  when we use new keyword new instance is created
//  new keyword calls constructor function and packs the argument
