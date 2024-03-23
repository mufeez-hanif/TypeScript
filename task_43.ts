let magicians: string[] = ["Someone", "Noone", "Anyone"];

function show_magicians(ma: string[]) {
    ma.forEach(magician => {
        console.log(magician);
    });
}
function make_great(m: string[]) {
    let temp:string[]=[];
    m.forEach((val, index) => {
        temp[index] = `Great ${val}`;
    })
    return temp;
}
let temp:string[]=make_great(magicians);
show_magicians(magicians);
show_magicians(temp);
