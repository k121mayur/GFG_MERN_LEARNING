const num = 12; 
function findFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }else {
            continue;
        }
    }

    return factors.length
}

console.log(findFactors(num))