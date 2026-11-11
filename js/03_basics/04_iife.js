// Immediately Invoked Function Expreesions (IIFE)

(function life(){
    console.log(`Life connected`);
})();// it is important to use the semicolon ; here to stop the iife function.


((name) => {
    console.log(`Life connected 2 ${name}`);
})('Sumit')
