let arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of arr) {
    if (num < 4) {
        if (num == 1) {
            console.log(`${num}st`);
        }
        else if (num == 2) {
            console.log(`${num}nd`);
        } else {
            console.log(`${num}rd`);
        }
    }
    else {
        console.log(`${num}th`);
    }
}