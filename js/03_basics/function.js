function sayMyName(){
    console.log("S");
    console.log("U");
    console.log("M");
    console.log("I");
    console.log("T");
}

//sayMyName()

// function addTwoNumber(number1,number2){
//     //console.log(number1 + number2);
//     let result = number1 + number2;
//     return result;
// }

// const result = addTwoNumber(4,6);
// console.log("Result :", result);

// function loginUserMessage(username="Shree"){
//     if(!username){
//         console.log("Please enter a username")
//         return 
//     }
//     return `${username} just logged in` 
// }

// console.log(loginUserMessage("Sumit"))
// console.log(loginUserMessage());



// function calculateCartPrice(val1 , val2 ,...num1){
//     return num1
// }

// console.log(calculateCartPrice(200,300,400,500,600))

const user = {
    username : "Sumit",
    price:199 
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "Sam",
    price : 399
})

const myArray= [200,300,400,600]

function returnSecondValue(getarray){
    return getarray[1]
}


//console.log(returnSecondValue(myArray));
//console.log(returnSecondValue([200,400,500,1000]));

