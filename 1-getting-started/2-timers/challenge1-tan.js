const func = (delay) => {
    console.log(`Hello after ${delay}sec`)
}

setTimeout(func,4*1000,4);

setTimeout(func,8*1000,8);