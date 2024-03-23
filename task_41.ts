let magicians: string[] = ["Someone", "Noone", "Anyone"];

function show_magicians(m: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);