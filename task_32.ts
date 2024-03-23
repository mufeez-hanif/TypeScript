let current_users: string[] = ['mufeez', 'hanif', 'junaid', 'someone', 'anyone', 'admin'];
let new_users: string[] = ['aqib', 'ahmed', 'junaid', 'altaf', 'mufeez'];

for (let user of new_users) {
    if (current_users.includes(user)) {
        console.log(user, " needs to add a new username, as it has been already taken");
    }
    else {
        console.log("User name ", user, "available");

    }
}
