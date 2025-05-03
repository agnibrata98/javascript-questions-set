let x = [1,-6,7,8,-3,-2,-9]
function findNegativeSum(arr) {
    return arr.filter(num => num < 0).reduce((acc, currentValue) => acc + currentValue, 0);
}

// console.log(findNegativeSum(x));


let arr = [1,2,3,4,5,6,7,8,9,10];

const findSumOfPrime = (arr) => {
    const isPrime = (num) => {
      if (num < 2) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    };
  
    return arr.map(num => (isPrime(num) ? num : 0)).reduce((acc, currentValue) => acc + currentValue, 0);
};

// console.log(findSumOfPrime(arr));



const input = "George Raymond Richard Martin";

const getNameInitials = (name) => {
  return name
    .split(" ") 
    .map(word => word[0].toUpperCase()) 
    .join(""); 
};

console.log(getNameInitials(input));