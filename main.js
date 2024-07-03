//Calculate the sum of the marks of all students

let students = [
    { name: "Lisa", age: 26, mark: 100},
    { name: "Jiso", age: 30, mark: 70},
    { name: "Jennie", age: 27, mark: 90},
    { name: "Rose", age: 28, mark: 60},
];

let sums = students.reduce((acc, curr) => acc + curr.mark, 0);
console.log(sums);