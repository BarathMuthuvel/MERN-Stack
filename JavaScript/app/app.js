//! 1
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

["C", "D", "E"].forEach((x) => console.log(x));

console.log("F");

//! 2

const obj = [
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

obj.map((item) => {
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

const a = [1, 2, 3, [4, [5, 6]], 7, 8];

function flattenArray(arr){
    return arr.reduce((acc,val) => {
        return acc.concat(Array.isArray(val)? flattenArray(val) : val)
    },[])
}

const result = flattenArray(a);
console.log(result);
