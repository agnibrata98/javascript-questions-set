// Write a function capitalizeNames that takes an array of names and returns a new array where
// each name is capitalized (the first letter is uppercase, and the rest are lowercase).
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Input:
// // Expected Output:
// ["Alice", "Bob", "Charlie"]
const names = ["alice", "BOB", "cHaRlIe"];

function capitalizeNames(names) {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  });
}
// console.log(capitalizeNames(names));


// Write a function filterEvenNumbers that takes an array of numbers and returns a new array
// containing only the even numbers.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Input:
const numbers = [1, 2, 3, 4, 5, -6];
// // Expected Output:
// [2, 4, 6]

function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

// console.log(filterEvenNumbers(numbers));


// Write a function calculateProduct that takes an array of numbers and returns the product of
// all the numbers using the reduce method.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Input:
// // Expected Output:
// 24
const arr = [1, 2, 3, -4];

function calculateProduct(numbers) {
  return numbers.reduce((acc, curr) => acc * curr, 1);
}

// console.log(calculateProduct(arr));


// Write a function getSquaresOfEvens that takes an array of numbers and returns a new array containing the squares of only the even numbers.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Input:
// // Expected Output:
// [4, 16, 36]
const arr2 = [1, 2, 3, 4, 5, 6];

function getSquaresOfEvens(numbers) {
  return numbers.filter((number) => number % 2 === 0).map((number) => number ** 2);
}

// console.log(getSquaresOfEvens(arr2));


// Write a function sumOfOddNumbers that takes an array of numbers and returns the sum of all
// odd numbers using filter and reduce.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Input:
const numbers2 = [1, 2, 3, 4, 5, 6];
// // Expected Output:
// 9

function sumOfOddNumbers(numbers) {
  return numbers.filter((number) => number % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
}

// console.log(sumOfOddNumbers(numbers2));



// Create a class Person with the following properties and methods:
// • Properties: name, age
// • Methods:
// • introduce: Returns a string in the format "Hi, my name is [name] and
// I am [age] years old."
// • birthday: Increments the person's age by 1.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Usage:
// const person = new Person("Alice", 25);
// console.log(person.introduce()); // "Hi, my name is Alice and I am 25 years old."
// person.birthday();
// console.log(person.age); // 26

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }

  birthday() {
    return this.age++;
  }
}

const person = new Person("Alice", 25);
// console.log(person.introduce())
person.birthday();
// console.log(person.age);



// Create a class Student that inherits from the Person class. Add the following:
// • A property grade (default value is 1).
// • A method promote that increments the grade by 1.
// javascript
// 1
// 2
// 3
// 4
// 5
// // Example Usage:
// const student = new Student("Bob", 15, 5);
// console.log(student.introduce()); // "Hi, my name is Bob and I am 15 years old."
// student.promote();
// console.log(student.grade); // 6

class  Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  promote() {
    return this.grade++;
  }
}
const student = new Student("Bob", 15, 5);
// console.log(student.introduce());
student.promote();
// console.log(student.grade);



// Write a function createStudents that takes an array of student data (objects with name and age) and returns an array of Student objects.
// javascript
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// ⌄
// ⌄
// // Example Input:
// const studentsData = [
// { name: "Alice", age: 20 },
// { name: "Bob", age: 22 }
// ];
// // Expected Output:
// [
// Student { name: "Alice", age: 20, grade: 1 },
// Student { name: "Bob", age: 22, grade: 1 }
// ]


class Student2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

function createStudents(studentsData) {
  return studentsData.map((student) => new Student2(student.name, student.age));
}

const studentsData = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 }
];

const students = createStudents(studentsData);
// console.log(students);



// Write a function oldestStudent that takes an array of Student objects and returns the name
// of the oldest student.
// javascript
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// ⌄
// // Example Input:
// const students = [
// new Student("Alice", 20),
// new Student("Bob", 22),
// new Student("Charlie", 19)
// ];
// // Expected Output:
// "Bob"

class Student3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

   findOldestStudent(students) {
    const studentsObj = students.reduce((oldest, current) =>  {
        return current.age > oldest.age ? current : oldest;
    })
    return studentsObj.name;
  }
}

const students2 = [
    new Student3("Alice", 20),
    new Student3("Bob", 22),
    new Student3("Charlie", 19)
];
const oldestStudent = new Student3();
// console.log(oldestStudent.findOldestStudent(students2));




// Write a function groupStudentsByGrade that takes an array of Student objects and groups
// them by their grade into an object where the keys are grades and the values are arrays of students in
// that grade.
// javascript
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// ⌄
// ⌄
// // Example Input:
// const students = [
// new Student("Alice", 20, 1),
// new Student("Bob", 22, 2),
// new Student("Charlie", 19, 1)
// ];
// // Expected Output:
// {
// 1: [Student { name: "Alice", age: 20, grade: 1 }, Student { name: "Charlie", age: 19, grade: 1 }],
// 2: [Student { name: "Bob", age: 22, grade: 2 }]
// }


class Student4 {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  groupStudentsByGrade(students) {
    const groupedStudents = students.reduce((grouped, student) => {
      if (!grouped[student.grade]) {
        grouped[student.grade] = [];
      }
      grouped[student.grade].push(student);
      return grouped;
    }, {});
    return groupedStudents;
  }
}

const students3 = [
    new Student4("Alice", 20, 1),
    new Student4("Bob", 22, 2),
    new Student4("Charlie", 19, 1)
];
const groupStudents = new Student4();
// console.log(groupStudents.groupStudentsByGrade(students3));

