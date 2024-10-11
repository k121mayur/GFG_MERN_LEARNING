const num = "199";

function countOfDigit(num) {
    if (typeof num != 'number') {
            num = Number(num);
            if (isNaN(num)) {
                return 'Invalid Input';
            }else{
            return num.toString().length;
            }   
    } else {
        return num.toString().length;
    }
}

console.log(countOfDigit(num));
