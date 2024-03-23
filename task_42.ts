let magicians: string[] = ["Someone", "Noone", "Anyone"];

function show_magicians(ma: string[]) {
    ma.forEach(magician => {
        console.log(magician);
    });
}
function make_great(m: string[]) {
    m.forEach((val, index) => {
        m[index] = `Great ${val}`;
    })
}
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
