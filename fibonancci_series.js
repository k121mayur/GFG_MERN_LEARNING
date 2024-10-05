
let start_number = 1

let how_many_numbers = 10

let first_number = start_number
let last_number = 0
for (let i = 0; i < how_many_numbers; i++) {
    console.log(first_number+last_number)
    place_holder = first_number
    last_number = first_number
    first_number = first_number + last_number
}