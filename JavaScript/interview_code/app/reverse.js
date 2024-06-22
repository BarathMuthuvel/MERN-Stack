//! Reverse

function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log(reverseString("Barath")); //output: htaraB

function reverseArray(arr) {
  let reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])); // Output: [5, 4, 3, 2, 1]

function reverseWords(sentence) {
  let words = [];
  let word = "";
  for (let char of sentence) {
    if (char === " ") {
      words.push(word);
      word = "";
    } else {
      word += char;
    }
  }
  words.push(word); // push the last word
  let reversedSentence = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedSentence += words[i] + (i === 0 ? "" : " ");
  }
  return reversedSentence;
}
console.log(reverseWords("hello world")); // Output: "world hello"

function reverseVowels(s) {
  const vowels = "aeiouAEIOU";
  let stack = [];
  // Push vowels onto the stack
  for (let char of s) {
    if (vowels.indexOf(char) !== -1) {
      stack.push(char);
    }
  }
  let result = "";
  // Construct the result string
  for (let char of s) {
    if (vowels.indexOf(char) !== -1) {
      result += stack.pop(); // Pop from the stack to reverse the order
    } else {
      result += char;
    }
  }
  return result;
}
console.log(reverseVowels("hello")); // Output: "holle"
console.log(reverseVowels("leetcode")); // Output: "leotcede"

function reverseDigits(num) {
  let result = 0;
  while (num !== 0) {
    result = result * 10 + (num % 10);
    num = (num - (num % 10)) / 10;
  }
  return result;
}
console.log(reverseDigits(1234)); // Output: 4321
console.log(reverseDigits(-5678)); // Output: -8765

function reverseSubarray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverseSubarray([1, 2, 3, 4, 5], 1, 3)); // Output: [1, 4, 3, 2, 5]

function reverseNestedArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let reversedSubArr = [];
        for (let j = arr[i].length - 1; j >= 0; j--) {
            reversedSubArr.push(arr[i][j]);
        }
        result.push(reversedSubArr);
    }
    return result;
}
const originalArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const reversedArray = reverseNestedArray(originalArray);
console.log(reversedArray);

function reverseDiagonals(matrix) {
    const n = matrix.length;  
    // Reverse main diagonal
    for (let i = 0; i < n / 2; i++) {
        let temp = matrix[i][i];
        matrix[i][i] = matrix[n - 1 - i][n - 1 - i];
        matrix[n - 1 - i][n - 1 - i] = temp;
    }   
    // Reverse secondary diagonal
    for (let i = 0; i < n / 2; i++) {
        let temp = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = matrix[n - 1 - i][i];
        matrix[n - 1 - i][i] = temp;
    }    
    return matrix;
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(reverseDiagonals(matrix)); // Output: [[9, 2, 7], [4, 5, 6], [3, 8, 1]]

function reversePairs(arr) {
    for (let i = 0; i < arr.length - 1; i += 2) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
    return arr;
  }
  
  console.log(reversePairs([1, 2, 3, 4, 5, 6])); // Output: [2, 1, 4, 3, 6, 5]
  console.log(reversePairs([1, 2, 3, 4, 5])); // Output: [2, 1, 4, 3, 5]
  
