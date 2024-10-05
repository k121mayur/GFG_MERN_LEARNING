let string = "aemhjiou"
const vowels = ["a", "e", "i", "o", "u"]
for (let i in string){
    if (vowels.includes(string[i].toLowerCase())){
        a = string[i].toUpperCase()
        console.log(a)
    }
}