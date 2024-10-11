const num = 123456789;

function sumOfDigits(num) {
    // here we can implement the type check also

    return num.toString().split("").map(Number).reduce((a, b) => a + b)
}

console.log(sumOfDigits(num))