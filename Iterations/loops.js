// FOR LOOP//
// const array = [1,5,6,7,8,5,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }
// for (let i = 0; i < 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 0; j < array.length; j++) {
//         const element = array[j];
        
//     }
    
// }
// for of loop
// ["",""]
// [{},{},{}]
// const arr = [1,2,3,4,5,6]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greeting = "hello bro"
// for (const greet of greeting) {
//     console.log(`Each char is ${greeting}`);
// }
//MAps 
const map = new Map()
map.set('IN',"India")
map.set('us',"USA")
map.set('en',"england")

// console.log(map);
// for (const [key , value] of map) {
//     console.log(key ,  ":-" , value);
    
// }
// for of is not iterable on objects
const myobj = {
    js : "javascript",
    cpp:'c++',
    rb : 'ruby'
}

// for (const key in myobj) {
//     console.log(`${key} shortcut is for ${myobj[key]}`);
// }
// for in loop is iterable on Array but give keys not values\
// we cannot use for in loop in MAP 
//FOR EACH LOOP
const coding = ["js",'ruby',"java","swift","cpp"
]
// coding.forEach( function (item) {
//     console.log(item);
    
// })


// coding.forEach( (val) => {

//     console.log(val)

// }
// )

// function printme (item) {
//     console.log(item);
    
// }
//  coding.forEach(printme)

//  coding.forEach((item ,index,arr)=>{
//     console.log(item,index , arr);
//  })

const mycoding = [
    {
        languagename : "javascript"
        ,filename :" js"
    },
    {
        languagename : "java"
        ,filename :" java"
    },
    {
        languagename : "ruby"
        ,filename :" rb"
    }
]
mycoding.forEach((item)=>{

    console.log(item.languagename);
})