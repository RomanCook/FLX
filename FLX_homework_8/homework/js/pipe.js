function addOne(x) {
    return x + 1;
}

function pipe(x) {
    let sum = x;
    for (let i = 1; i < arguments.length; i++) {
        sum = arguments[i](sum);
    }
    console.log(sum);
}

pipe(1, addOne, addOne);