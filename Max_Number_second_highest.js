let highest 
let secondHighest


arr = [5,4,3,2,1]
highest = arr[0]
secondHighest = arr[3]

console.log("Second", secondHighest)
console.log("First", highest)

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondHighest) {
        if (arr[i] > highest) {
            secondHighest = highest
            highest = arr[i]
        } else if (arr[i] < highest) {
            secondHighest = arr[i]
        }
    }
}   

console.log("Second", secondHighest)
console.log("First", highest)