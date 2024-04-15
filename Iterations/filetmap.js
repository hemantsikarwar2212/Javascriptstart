// const coding = ["js","java","cpp"]
// const values = coding.forEach((item)=>{
//     console.log(item);
// })
// console.log(values);

const nums = [1,2,3,4,5,6,7,8,9]

// const newnums = nums.filter((num)=> num>4)
// console.log(newnums);
// const newnums = nums.filter((num)=> {return num>4})
// console.log(newnums);
 
// const num2 = []
// num2.forEach((num2)=>{
//     if(num2>4){
//         return num2.push(num2)
//     }
// })

// console.log(num2);

// const newnums = nums.map((num) => {return num+10})
const newnum = nums.map((num) => num*10)
.map((num)=> num+1).filter((num) => num >=40)
console.log(newnum);
// // REDUCE//
 const mynums = [1,2,8]
const myTotal = mynums.reduce(function(acc,currval){
    return acc + currval
},0)
// console.log(myTotal);

// const myTotal = mynums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal);

const shopppingCart = [
    {
        item : "js",
        price : 999
    },
    {
        item : "ML",
        price : 1999
    },
    {
        item : "android",
        price : 2999
    }
]

const PriceTOpay = shopppingCart.reduce((acc,item)=> (acc + item.price) ,0)
console.log(PriceTOpay);
