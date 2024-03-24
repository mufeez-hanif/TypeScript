let myName : string = "Mufeez hanif";

console.log(myName.toLowerCase())
console.log(myName.toUpperCase())

function toTitleCase(str: string): string {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
}

let titleCaseString :string = toTitleCase(myName);
console.log(titleCaseString); 
