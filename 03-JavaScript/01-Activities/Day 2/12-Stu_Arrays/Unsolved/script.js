// WRITE YOUR CODE HERE
var students = ["Bob", "Steve", "John", "Smith"];

// 1
console.log(students.length);

// 2
console.log("Welcome to the class", students[0])
console.log("Welcome to the class", students[1])
console.log("Welcome to the class", students[2])
console.log("Welcome to the class", students[3])

// 3
students[0] = "Alex";
console.log(students[0], "has replaced Bob");

if (students[0] === "Alex") {
    console.log(students[0], "is in class");
}
