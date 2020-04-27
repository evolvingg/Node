

let c = 0; 
const func = () => {
    c++;
    console.log('hello world');
    if(c===5) {
        clearInterval(timId);
        console.log('Done');
    }
}


const timId = setInterval(func ,1*1000);