const myArr = [1,2,3,4,5]
// console.log(myArr)
// console.log(typeof(myArr))
// const myArr2 = new Array(1,2,3,4,6)
// console.log(myArr2)



///Array methods
myArr.push(6)
// console.log(myArr)

// console.log("A", myArr)
// const myn1 = myArr.slice(1,3)
// console.log(myn1)
// console.log("B" , myArr)
// const myn2 = myArr.splice(1,3)
// console.log(myn2)
// console.log(myArr)



const myHeros = ["ram", "lakshman" , "sitaram"]
const myVillan = ["ravan", "vibhishan" , "kumbhkraran"]
myHeros.push(myVillan)
// console.log(myHeros)
// console.log(myHeros.length)

//But 
const allHeros = myHeros.concat(myVillan)
// console.log(allHeros)
// console.log(allHeros.length)

const Allheros = [...myHeros , ...myVillan]
// console.log(Allheros)



const anotherArr = [1,2,3,[4,5,6,[7,8,9,[10]]]]
const realArr = anotherArr.flat(Infinity)
console.log(realArr)