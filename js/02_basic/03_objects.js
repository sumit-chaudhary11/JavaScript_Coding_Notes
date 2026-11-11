// singleton

// object literals

// const mySym = Symbol("Key1")

// const person={
//     name: "Sumit",
//     "full Name ": "Sumit Chaudhary",
//     [mySym]: "mykey1",
//     age:22,
//     location:"Mathura",
//     email:"Sumit123@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["Monday","Saturday"]
// }

// console.log(person.email)
// console.log(person["email"])
// console.log(person["full Name "]);
// console.log(person[mySym])

// person.email = "Sumit.chat@gmail.com";
// Object.freeze(person) 
// person.email = "Sumnik.always@gmail.com";
// console.log(person);

// person.greeting = function(){
//     console.log("hello Sumit");
// }

// person.greeting2 = function(){
//     console.log(`Hello, ${this.name}`);
// }

// console.log(person.greeting());
// console.log(person.greeting2());


// +++++++++++++++++++++++++++ Part2 ++++++++++++++++++++++++++++++++
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Nikita";

console.log(tinderUser)

const regularUser = {
    email:"Niki@gmail.com",
    fullName : {
        UserfullName:{
           firstName : "Nikita",
           lastName : "Sharma"
        } 
    }
}
// console.log(regularUser.fullName.UserfullName.firstName);


// combining objects
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",3:"b"}

//const obj3 = {obj1 , obj2}
//const obj3 = Object.assign({},obj1,obj2)

const obj3 ={...obj1,...obj2}

console.log(obj3)

const users = [
    {
        id:1,
        email : "s@gamil.com"
    },
    {
        id: 2 ,
        email : "n@gmail.com"
    }

]

users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename : "js Notes",
    price : "999",
    courseInstructor : "Sumit"
}

const {courseInstructor: instructor} = course // destructor of any value 

console.log(instructor);




