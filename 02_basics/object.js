const sym   = symol("sym")
const jsUser = {
    name : "Anuj",
    age : 12,
    location :"rbl",
    email : "email",
    mySym : "Mysymbol",
    [sym] : "orisymbol"


}
console.log(jsUser.email)
console.log(jsUser["email"])

console.log(jsUser.mySym)
console.log(typeof jsUser.mySym)

console.log(jsUser.sym)
console.log(typeof jsUser[sym] )
