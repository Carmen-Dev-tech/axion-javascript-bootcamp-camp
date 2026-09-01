// Exercise 30: Manual Sort

let numbers = [5, 2, 8, 1, 3];

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j])
{
           let temp = numbers[i];
           numbers[i] = numbers[j];
           numbers[j] = temp;
        }
    }
}

console.log(numbers);