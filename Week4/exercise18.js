//  Exercise 18: Right-Aligned Triangle Pattern

for (let row = 1; row <= 5; row++) {
    let pattern = "";

    for (let space = 1; space <= 5 - row; space++) {
        pattern += " ";
    }

    for (let column = 1; column <= row; column++) {
        pattern += "*";
    }

    console.log(pattern);
}