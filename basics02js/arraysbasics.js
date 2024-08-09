const student = ["hemant","piyush","madhav"];
const student1 = ["hemant",4,5,56,{
    FirstName : "hemant",
    LastName : "sikarwar",
    age : 21,
    gender : "male",
    Obj1 : {
        Address : "sikandra",
        city : "agra",
        pincode : "282007"

    }
},"piyush","madhav"];
// To update the existing values we have methods
// we use foreach function iteration over any values and it doesnot change the original array 
// it does not give new array 
console.log(student1.forEach((Element)=>{
    console.log(Element);
}));
//// we use foreach function iteration over any values and it doesnot change the original array 
// it give new array 
// it is like arraystoString function in java

console.log(student1.map((Element)=>{
    console.log(Element);
}));
// student[0] = "raja";
// console.log(student);
// student.push("suraj");
// console.log(student);
// student.reverse();
// console.log(student);
// function print(n){
//     console.log(n);
    
// } 
// find function  return the element from array 
student.find(element => element==="hemant");
let result11 = student.find(element => element===("he" + "mant"));
console.log(result11);
// findINdex -- returns the index of the element if present in array
//includes - returns  the boolean value if the element is present 
//filter
const number = [1,2,3,4,5,6,7,8,9];
const newArr = number.filter(num => num%2==0);
console.log(newArr);
// slice ----- gives a new array from starting index to last index bot excludes last index
//it does not manipulates original array always gives new array
let newArr1 = number.slice(1,4)
console.log(newArr1);
//splice -- it deletes the element with given index and also manipulates the existing array

number.splice()