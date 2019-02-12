function getMin(...rest) {
    let minArguments = arguments[0];
    for (let i = 1; i <= rest.length; i++) {
        if (arguments[i] < minArguments) {
            minArguments = arguments[i];
        }
    }
    console.log(minArguments);
}

getMin(3, 0, -3);