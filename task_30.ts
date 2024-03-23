let arr: string[] = ['mufeez', 'hanif', 'junaid', 'someone', 'anyone', 'admin'];

for (let name of arr) {
    if (name != "admin") console.log("Hello ",name, ", thank you for logging in again");
    else console.log("Hello admin, would you like to see a status report?");
}
