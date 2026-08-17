// Exercise 26: Largest Number 

let numbers = [12, 45, 7, 23, 89];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
 console.log(largest);