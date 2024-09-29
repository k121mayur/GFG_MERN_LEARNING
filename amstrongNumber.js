let number = 153;

let length = number.toString().length;

function amstrong(num, length) {
    total = 0;
    while (num > 0) {
        let rem = num % 10
        total = total + (rem ** length)
        num = (num-rem)/10
    }

    if (total == number) {
        return true
    } else {
        return false
    }

}

console.log(amstrong(number, length))