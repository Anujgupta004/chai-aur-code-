// function myCartCount(...num1){
// return num1
// }
// console.log(myCartCount(12,34,24,43,24))
// function valCart(val1,val2,...num2){
//     return num2
// }
// console.log(valCart(2222,32,3,5,24,2,4,1))

// object in function
const user = {
    username : "asda",
    price : 123
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

// Arrya in functions

const myArray = [12,32,12,12]
function returnSecondArray (getArray) {
return getArray
}
console.log(returnSecondArray(myArray))