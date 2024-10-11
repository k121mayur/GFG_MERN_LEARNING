const num = 125; 

function multiplicationOfDigits(num) {
    return num.toString().split("").map(Number).reduce((a, b) => a * b);
}

console.log(multiplicationOfDigits(num))