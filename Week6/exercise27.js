// Exercise 27: Smallest Number

let numbers = [12, 45, 7, 23, 89];

let smallest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log(smallest);