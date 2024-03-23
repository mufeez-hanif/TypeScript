function make_shirt(size :string = "large " ,message:string = "I love typescript "):void {
    console.log(`The size is ${size}, with the message  "${message}"`);
}

make_shirt("large");
make_shirt("medium");
make_shirt("small","New message other than default");