// 1. Write a function multiply that takes two numbers and returns their product.

function multiply(a, b) {
  return a * b;
}

// console.log(multiply(2, 3)); 


// 2. Given the object const person = { name: "Alice", age: 25 }, destructure it into name and age variables and log them.

const person = { name: "Alice", age: 25 };

  const { name, age } = person;
//   console.log(name);
//   console.log(age);

// 3. Write a function applyFunction that takes an array and a function as arguments, and applies the function to each element of the array.

function applyFunction(arr, func) {
  return arr.map(func);
}

// console.log(applyFunction([1, 2, 3, 4, 5], (x) => x * 3));

// 4. Given an array [1, 2, 3], write a function that returns a new array where each element is doubled using map.

function doubleArray(arr) {
  return arr.map((x) => x * 2);
}

// console.log(doubleArray([1, 2, 3]));

// 5. Write a function filterEvenNumbers that filters out even numbers from an array [1, 2, 3, 4, 5] using filter.

function filterEvenNumbers(arr) {
  return arr.filter((x) => x % 2 === 0);
}
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7,8,9,10]));


// 6. Write a function sum that takes an array of numbers and returns the sum of all the elements using reduce.

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}
// console.log(sum([1, 2, 3, 4, 5]));

// 7. Given an array [5, 10, 15, 20], use map to create a new array where each number is increased by 5.

let array = [5, 10, 15, 20];
let newArray = array.map((x) => x + 5);
// console.log(newArray);

// 8. Create a simple class Person with properties firstName, lastName, and age. Include a method fullName that returns the full name.

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
let person1 = new Person("John", "Doe", 30);
// console.log(person1.fullName());

// 9. Write a function that takes an object {name: "John", age: 30} and adds a method greet which prints "Hello, my name is John".

function addGreetMethod(obj) {
    obj.greet = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
    return obj;
  }
  
  const person2 = { name: "John", age: 30 };
  addGreetMethod(person2);
//   person2.greet(); 


// 10. Implement a function add that takes two parameters and returns their sum. Use an arrow function to write it.

const add = (a, b) =>  a + b;
// console.log(add(2, 3));


// 11. Write a function doubleNumbers that takes an array [1, 2, 3, 4] and doubles each number using map.

function doubleNumbers(arr) {
  return arr.map((x) => x * 2);
}
// console.log(doubleNumbers([1, 2, 3, 4]));

// 12. Create an IIFE that logs the square of a given number.

// const mult = (function (num) {
//   console.log (num * num);
// })(10);


// 13. Write a function checkAdult that takes an array of objects { name, age } and filters out people who are under 18 using filter.

function checkAdult(arr) {
  return arr.filter((x) => x.age <= 18);
}
const persons = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 30 },
];
// console.log(checkAdult(persons));

// 14. Use object destructuring to extract the properties x and y from the object { x: 10,y: 20, z: 30 } and log them.

let object = { x: 10, y: 20, z: 30 };
let { x, y } = object;
// console.log(x);
// console.log(y);

// 15. Create a class Car with properties make, model, and year, and a method getDetails that returns a string with car details.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}
const car1 = new Car("Tata", "Nexon EV", 2022);
// console.log(car1.getDetails());

// 16. Use reduce to find the maximum number in the array [10, 20, 5, 30].

let array2 = [10, 20, 5, 30];
let max = array2.reduce((acc, curr) => (curr > acc ? curr : acc));
// console.log(max);


// 17. Implement a higher-order function combine that takes two numbers and a function. The function should apply the function to the two numbers.

function combine(a, b, func) {
  return func(a, b);
}
// console.log(combine(2, 3, (x, y) => x + y));


// 18. Create an IIFE that returns the factorial of a number n.

const factorial = (function (n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return(fact);
})(5);
// console.log(factorial);


// 19. Write a function countOccurrences that takes an array and returns the number of times a given element appears in the array using reduce.

function countOccurrences(arr, element) {
  return arr.reduce((count, current) => {
    if (current === element) {
      return count + 1;
    }
    return count;
  }, 0);
}
// console.log(countOccurrences([1, 2, 3, 2, 4, 2, 3], 2));

// 20. Write a function sortArray that sorts an array of numbers in ascending order using reduce.

function sortArray(arr) {
    return arr.reduce((sorted, num) => {
      sorted.push(num);
      sorted.sort((a, b) => a - b); 
      return sorted;
    }, []);
}
  const array4 = [5, 2, 8, 1, 9, -3];
  const sortedArray = sortArray(array4);
//   console.log(sortedArray);