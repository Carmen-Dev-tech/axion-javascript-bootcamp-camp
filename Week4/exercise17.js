// Exercise 17: Inverted Triangle Pattern

for (let row = 5; row >= 1; row--) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "*"
    }
     console.log(pattern);    
}