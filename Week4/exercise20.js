// Exercise 20: Student Marks Calculator

let marks = [60, 70, 45, 80, 55];

let total = 0;

for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

let average = total / marks.length;

console.log("Average:", average);

if (average >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}