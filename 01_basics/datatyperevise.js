// const anotherId = Symbol("123")
// console.log(id === anotherId)
// primitve datatype = call by value 
// 7 = string number bollean BigInt Symbol Null Undefined
let name = "ramu"
let age = 23
let IsLoggedIn = true
const anotherId = Symbol("123") 
let Null = null
let UndefinedValue;
// const BigInt = 23456789678
console.table([name,age,IsLoggedIn,Null,UndefinedValue])







// non primitive datatype = call by referencs 
// 3 = Array Object Function
let ArrayValue = [ "ram" , "shyam" , "age "]
console.log(ArrayValue)
let myObject = {
    name : "raj",
    age : 23
}
console.log(myObject)
const MyFunction = function () {
    console.log("this is me here")
}
MyFunction
