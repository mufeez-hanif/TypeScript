let arr: string[] = ['mufeez', 'hanif', 'junaid', 'someone', 'anyone', 'admin'];

if(arr.length==0) {
    console.log("User list is emoty, we need to find some users");
}
else{
for (let name of arr) {
    if (name != "admin") console.log("Hello ",name, ", thank you for logging in again");
    else console.log("Hello admin, would you like to see a status report?");
}
}
arr.length =0;

if(arr.length==0) {
    console.log("User list is emoty, we need to find some users");
} else{console.log("kabhi nhi chaleg else")};