//! 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

["C", "D", "E"].forEach((x) => console.log(x));

console.log("F");

//! 2

const obj1 = [
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 2",
    data: "Data2",
  },
  {
    key: "Sample 1",
    data: "Data1",
  },
  {
    key: "Sample 3",
    data: "Data3",
  },
  {
    key: "Sample 4",
    data: "Data4",
  },
];

const output = {};

obj1.map((item) => {
  if (output[item.key]) {
    //key is available
    output[item.key].push(item);
  } else {
    output[item.key] = [item];
  }
});

console.log(output);

//! 3

const add = (a, b) => a + b;

const memoizeOne = (fn) => {
  let lastArgs = [];
  let lastResult;
  return (...args) => {
    if (
      lastArgs.length === args.length &&
      lastArgs.every((arg, index) => arg === args[index])
    ) {
      return lastResult;
    }
    lastArgs = args;
    lastResult = fn(...args);
    return lastResult;
  };
};

const memoizedAdd = memoizeOne(add);

console.log(memoizedAdd(1, 2)); // 3, Add function is called to get new value
console.log(memoizedAdd(1, 2)); // 3, Add function is not executed: previous result is returned
console.log(memoizedAdd(2, 3)); // 5, Add function is called to get new value

//! 4

const a1 = [1, 2, 3, [4, [5, 6]], 7, 8];

function flattenArray(arr){
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const result = flattenArray(a1);
console.log(result);

//! FizzBuzz
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log("FizzBuzz");
      } else if (i % 3 === 0) {
          console.log("Fizz");
      } else if (i % 5 === 0) {
          console.log("Buzz");
      } else {
          console.log(i);
      }
  }
}

fizzBuzz();


//! Reverse String

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Barath Muthuvel"));

function reverseString(str) {
  let reversedStr = ''; 
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]; 
  }
  return reversedStr;  
}

console.log(reverseString("Barath")); 

//! Missing Number

function getMissingNumbers(inputArray) {
  const fullRange = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
  return fullRange.filter(num => !inputArray.includes(num)); 
}

const inputArray = [2,4,6,8];
const outputArray = getMissingNumbers(inputArray);
console.log("Missing Number",outputArray);


//! Rotate Array

function rotateArray(arr,step){
  step = step % arr.length
  for(i = 0; i < step; i++){
    const lastElement = arr.pop()
    arr.unshift(lastElement)
  }
  return arr
}

const inputArr = [1,2,3,4,5]
const step = 3;
const outputArr = rotateArray(inputArr,step)
console.log(outputArr)


//! Find longest str
function findLongestString(sentance) {
  const words = sentance.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(findLongestString("I love JavaScript"));

//! Palindrome
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return str === reverseStr;
}
console.log(isPalindrome("racecar"));

//! Remove Duplicate from an Array
function removeDuplicates(arr) {
  const uniqueArray = [];
  for(let i = 0; i < arr.length; i++){
    if(!uniqueArray.includes(arr[i])){
      uniqueArray.push(arr[i])
    }

  }
  return uniqueArray;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//! Anagram
function isAnagram(str) {
  const sortedStr1 = str.split("").sort().join("");
  const sortedStr2 = str.split("").sort().join("");
  return sortedStr1 === sortedStr2;
}
console.log(isAnagram("listen", "silent"));

//! Number of Vowles

function countVowles(str) {
  const vowles = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowles.includes(char)) {
      count++; 
    }
  }
  return count;
}
console.log(countVowles("Hello, World"));

function countEachVowel(str) {
  str = str.toLowerCase();
  const vowels = 'aeiou';
  const vowelCount = {};

  str.split('').forEach(char => {
    if (vowels.includes(char)) {
      vowelCount[char] = (vowelCount[char] || 0) + 1;
    }
  });

  return vowelCount;
}

console.log(countEachVowel('Barath'));

//! Find Largest Number
function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(findLargestNumber([3, 5, 6, 8, 9]));

//! Prime Number
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));
console.log(isPrime(10));

//! Factorial of Number
function factional(num) {
  if (num === 0) {
    return 1;
  }
  let factional = 1;
  for (let i = 1; i <= num; i++) {
    factional = factional * i;
  }
  return factional;
}
console.log(factional(5));

//! trim whitespace
let inputString = "Hello,   world!";
const str = inputString.replace(/\s+/g, "");
console.log(str);

//call,apply,bind
let emp1 = { firstName: "John", lastName: "Doe" };
function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + "," + greeting2
  );
}

invite.call(emp1, "Hello", "How are you?");
invite.apply(emp1, ["hello", "How are you?"]);
let greet = invite.bind(emp1);
greet("Hello", "How are you?");

//slice, splice
let arr = [1, 2, 3, 4, 5];
let arr1 = arr.slice(2, 4);
console.log(arr1);

let arr2 = arr.splice(1, 2, "Hello");
console.log(arr2);
console.log(arr);

//sum 1
printHello();
function printHello() {
  console.log("Hello");
  printMessage();
  function printMessage() {
    console.log("Good day");
  }
}

//sum 2
function verifyAnagram(word1, word2) {
  return word1.split("").sort().join("") === word2.split("").sort().join("");
}
console.log(verifyAnagram("eat", "ate"));

//sum 3
let arr3 = [1, 2, 3, 4, 5, -6, 7];
arr3.length = 0;
console.log(arr3);

//sum 4
let a = 10;
if (true) {
  let a = 20;
  console.log(a, "inside");
}
console.log(a, "outside");

//sum 5
// try {
//   setTimeout(() => {
//     console.log("try block");
//     throw new Error(`An exception is thrown`);
//   }, 1000);
// } catch (err) {
//   console.log("Error: ", err);
// }

// setTimeout(() => {
//   try {
//     console.log("try block");
//     throw new Error(`An exception is thrown`);
//   } catch (err) {
//     console.log("Error: ", err);
//   }
// }, 1000);

//sum 6

// const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 1000));
// const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 1000));

// Promise.allSettled([promiseOne, promiseTwo]).then((data) => console.log(data));

//sum 7
const num1 = new Number(10);
const num2 = 10;
console.log(num1 === num2);

//sum 8

// function greeting() {
//   setTimeout(function () {
//     console.log(message);
//   }, 1000);
//   const message = "Hello, Good morning";
// }
// greeting();

//sum 9
//! it doesn't matter where this has been written but how it has been invoked really matter

const user = {
  name: "John",
  eat() {
    console.log(this);
    var eatFruit = function () {
      console.log(this);
    };
    eatFruit();
  },
};
user.eat();

const user1 = {
  name: "Doe",
  eat() {
    console.log(this);
    var eatFruit = () => {
      console.log(this);
    };
    eatFruit();
  },
};
user1.eat();

//? In JavaScript, the variables such as objects, arrays and functions comes under pass by reference.
//? When you try to compare two objects with same content, it is going to compare memory address or reference of those variables.
//? These variables always create separate memory blocks hence the comparison is always going to return false value.

//sum 10
function second() {
  var message;
  console.log(message);
}
function first() {
  var message = "first";
  second();
  console.log(message);
}
var message = "default";
first();
console.log(message);

//sum 11

// ?   message();

// ?   function message() {
// ?     console.log("Hello");
// ?   }
// ?   function message() {
// ?     console.log("Bye");
// ?   }

//sum 12

//?   console.log(name1);
//?   console.log(message());
//?   var name1 = "John";
//?   (function message() {
//?     console.log("Hello John: Welcome");
//?   });

//sum 13

setTimeout(() => {
  console.log("1");
}, 0);
Promise.resolve("hello").then(() => console.log("2"));
console.log("3");

//sum 14

const numbers = [11, 25, 31, 23, 33, 18, 200];
numbers.sort((a, b) => a - b);
console.log(numbers);

//sum 15
console.log("First line");
[("a", "b", "c")].forEach((element) => console.log(element));
console.log("Third line");

//sum 16

let arr4 = [1, 2, 3];
let str3 = "1,2,3";

console.log(arr4 == str3);

console.log(typeof typeof typeof true);

function firstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

console.log(firstLetter("barath"));

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(5)(2)(3));

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 sucess");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 rejected");
  }, 2000);
});

Promise.all([p1, p2]).then((result) => {
  console.log(result);
});

Promise.allSettled([p1, p2]).then((result) => {
  console.log(result);
});

Promise.race([p1, p2]).then((result) => {
  console.log(result);
});

Promise.any([p1, p2]).then((result) => {
  console.log(result);
});

let radiusArr = [1, 2, 3, 4];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const caculate = function (radiusArr, opreation) {
  const output = [];
  for (let i = 0; i < radiusArr.length; i++) {
    output.push(opreation(radiusArr[i]));
  }
  return output;
};

console.log(caculate(radiusArr,area));

let arr5 = [1,2,3,4]
let obj = {...arr5}
console.log(obj);