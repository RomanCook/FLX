function reverseNumber(a) {
    let sign = 0 - a;
    let reverseNum = '';
    const a_string = Math.abs(a).toString();
    for (let i = 0; i < a_string.length; i++) {
        reverseNum = a_string[i] + reverseNum;
    }
    if (sign > 0) {
        reverseNum = 0 - parseInt(reverseNum);
    }
    console.log(parseInt(reverseNum));
}

reverseNumber(123);