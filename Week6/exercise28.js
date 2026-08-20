// Exercise 28: Average

let numbers = [10, 20, 30, 40, 50];

let total = 0;

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
}

let average = total / numbers.length;

console.log(average);