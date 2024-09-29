function isPrime(num) {
    if (num == 2){
        return true;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            } 
        }
        return true;

    }
}
const arr_prime = [];
let limit = 100;
for (let i = 2; i <= limit; i++) {
    if (i > 4 ) {
        if (i % 2 === 0 || i % 3 === 0 || i % 4 === 0) {
            console.log("Not Prime");
        } else {
            if (isPrime(i)) {
                arr_prime.push(i);
                console.log("Prime");
            }
        }
    }else {
        if (isPrime(i)) {
            arr_prime.push(i);
            console.log("Prime");
        }
    }
    
}

console.log(arr_prime);