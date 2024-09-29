
let num = 121

function isPalindrome(num) {
    num = num.toString();
    length = num.length;

    for (let i in num){
        if (num[i] !== num[length - 1 - i]) {
            return false
        } 
    }

    return true

}

console.log(isPalindrome(num))