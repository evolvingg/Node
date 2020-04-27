// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.

let c = 0;

let cinv = setInterval( (delay) => {
    console.log("Hello world");
    c=c+1;
    if(c===5) {
        console.log('Done');
        clearInterval(cinv);
    }
}, 1000);