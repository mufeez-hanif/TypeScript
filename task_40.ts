function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}

console.log(make_album("Someone", "First Album"));
console.log(make_album("Anyone", "Second"));
console.log(make_album("No One", "Third", 92));