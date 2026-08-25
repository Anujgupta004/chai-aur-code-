// Constructor function 
// function Person (fname , lname , contact)  {
//     this.fname = fname,
//     this.lname = lname,
//     this.contact = contact,
//     this.getFullName = function(){
//         console.log(this.fname , this.lname)
//     }
    
// }
// const person1 = new Person("Anuj","Gupta","9336")
// console.log(person1)
// const person2 = new Person("raju", "pandit","3234")
// console.log(person2)
// console.log(person1.getFullName())


// Es6 ke baad
class Person {
    constructor(Fname , Lname , Contact){
        this.Fname = Fname;
        this.Lname = Lname;
        this.Contact = Contact;
    }
    getFullName() {
        console.log(this.Fname , this.Lname)

    }

}
const person1 = new Person("Anuj","Gupta","9336")
// console.log(person1)


/// Json object ko deconstruct krna 

const course = {
    name : "javascript",
    price : "234",
    courseInstructor : "Hitesh"
}
const{ courseInstructor : instructor} = course
console.log(instructor)