// let c = 1;

// const func = (delay) => {
//     console.log('Hello World. ',c);
//     c = c+1;
// }


// setInterval(func, c*1000 , c);


let c = 0,d=100;

const func1 = (delay) => {
    if(c!==0 && c%5===0){
        d= d+100;
    }
    console.log('Hello World. ',d);
    c = c+1;
}


setInterval(func1, c*1000 , d);