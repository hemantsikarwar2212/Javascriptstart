const promiseOne = new Promise(function(resolve , reject){
    // do an async task
    //DB calls, cryptography 
    setTimeout(function(){
        console.log('task is completedd man');
        resolve()
    },1000)
}) 


promiseOne.then(function(){
    console.log('promise consumeed');
})

new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("task 2 is completed");
            resolve()
        },1000)
}).then(function(){
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function( resolve,reject){
    setTimeout(function(){
        resolve({username: "chai" , email : "hemant@gmail.com"})
        console.log("printed");
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : 'hemant ' , password : '123'})
        
        
        }
        
        else{
            reject('ERROR: 404 NOT FOUND')
        }
    },1000)
        
    })
promiseFour.then((user1)=>{
        console.log(user1);
        return user1.username;
}).then((username)=>{
    console.log(username);
} ).catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("either the promise is resolved or reject ");
})

const promsisefive = new Promise(function (resolve,reject){
       setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username : 'hemant' , pass : "heman"})
        }
        else{
            reject("Error is found")
        }
       },1000)
})
async function consumePromiseFive(){
   try{
     const response = await promsisefive
         console.log(response);
   }
   catch(error){
    console.log(error);
   }
}
consumePromiseFive()
