const user = {
    username : "Sumit",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

//user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

//console.log(this)

// function fun(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// fun()


// const game = function(){
//     let username = "hitesh";
//     console.log(this.username);
// }

// const game = () => {
//     let username = "hitesh";
//     console.log(this);
// }
// game()

// Arrow Function // explicit arrow function
const addTwo = (num1 , num2) => {
    return num1 + num2
}

//Another way to write this function  // implicit arrow function
const addOne = (num1, num2) => num1 + num2

console.log(addTwo(3,4))
console.log(addOne(4,5))
const myArray =[2,5,3,7,8]

//myArray.forEach(() => {})