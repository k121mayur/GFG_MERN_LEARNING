const num = 6; 
function multiplicationOfFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }else {
            continue;
        }
    }

    return factors.reduce((acc, num) => acc * num);
}

console.log(multiplicationOfFactors(num))

