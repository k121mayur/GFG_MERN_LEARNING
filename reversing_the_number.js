const num = 123

function reverse(num) {
    return Number(num.toString().split('').reverse().join(''))
}

console.log(reverse(num))
