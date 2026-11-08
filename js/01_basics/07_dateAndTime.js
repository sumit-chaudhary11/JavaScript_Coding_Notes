// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


let myDate1 = new Date(2023 , 0 , 23 , 5 , 3);
// console.log(myDate1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myDate1.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


// `$ {newDate.getday()} and the time`

newDate.toLocaleString('deafult',{
      weekday: "long",
})

