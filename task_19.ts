let guests: string[] = ["Chachu", "Hamza", "Ilyas"];
for (let person of guests) console.log("Assalam o Alaikum,\n", person, ",\nI would like to invite you on dinner which is scheduled tomorrow at my home.\n\nI believe that you will be there\nThanks!\n\n");

console.log("Chachu and Ilyas will not be able to come");
guests[0] = "Aqib";
guests[2] = "Ahmer";

for (let person of guests) console.log("Assalam o Alaikum,\n", person, ",\nI would like to invite you on dinner which is scheduled tomorrow at my home.\n\nI believe that you will be there\nThanks!\n\n");

//task 19 starts from here

console.log("Number of guests" + guests.length);