const sym   = Symbol ("symbol")
const jsUser = {
    name : "Anuj",
    age : 12,
    location :"rbl",
    email : "email",
    [sym] : "sym"


}
console.log(jsUser.email)
console.log(jsUser["email"])


console.log(jsUser[sym])
console.log(typeof jsUser[sym] )

console.log(jsUser)
// Object.freeze(jsUser)

// jsUser.email = "Rahul@gmail,com"
// console.log(jsUser)
jsUser.greeting = function(){
    console.log("this is greeting")
}

jsUser.greetingTwo = function(){
    console.log(`This name is ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())