//!clouser

let x = 1;

function parentFn() {
  let y = 2;
  console.log(x);
  function childFn() {
    console.log(y);
  }
  return childFn;
}

const result = parentFn();
console.log(result);
result();

//!inheritance

//? one Object try to access methods and proterties of other Object
// whenever we create object in js. js engine autometically put hidden property in object and attached to it original object we can access that property and method

//* arr.__proto__ === Array.prototype
//* arr.__proto__.__proto__ === Object.prototype
//* arr.__proto__.__proto__.__proto__ === null

let obj1 = {
  name: "Barath",
  city: "Chennai",
  getInfo: function () {
    console.log(this.name + " from " + this.city);
  },
};

let obj2 = {
  name: "Muthu",
};

obj2.__proto__ = obj1;
console.log(obj2.getInfo());

//! Polyfill for bind

let basic = {
  name: "Barath",
  age: 25,
};

function callMe(hometown, state, country) {
  console.log(
    "My Name " +
      this.name +
      " age is " +
      this.age +
      " " +
      hometown +
      " " +
      state +
      " " +
      country
  );
}

Function.prototype.mybind = function (context, ...args1) {
  let obj = this;
  return function (...args2) {
    obj.apply(context, [...args1, ...args2]);
  };
};

let callBind = callMe.bind(basic, "Authoor", "TamilNadu");
callBind("India");

let mycallBind = callMe.mybind(basic, "Kottar", "TamilNadu");
mycallBind("India");

//! Currying

//? currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.

function add(num1) {
  return function (num2) {
    return function (num3) {
      return num1 + num2 + num3;
    };
  };
}

console.log(add(2)(3)(4));

//! async & defer

//?Async allows your script to run as soon as it’s loaded, without blocking other elements on the page. Defer means your script will only execute after the page has finished loading.

//! Debouncing

//? Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called.
//? This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

let counter = 0;
const getData = () => {
  console.log("Fetching Data....", counter++);
};

const debounce = (func, timeout) => {
  let timer;
  return (...args) => {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, timeout);
  };
};

const debounceFunction = debounce(getData, 400);

//! Throttling

//? limits the function execution for a limited number of times

const expensiveFunc = () => {
  console.log("Expensive Function...");
};

const throttle = (func, limt) => {
  let flag = true;
  return (...args) => {
    let context = this;
    if (flag) {
      func.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limt);
    }
  };
};

const throttleFunc = throttle(expensiveFunc, 500);

window.addEventListener("resize", throttleFunc);

//! Event Bubbling - up, Event Capturing - down

//? Bubbling and Capturing are the two phases of propagation.
//? bubbling travels from the target to the root, and capturing travels from the root to the target.

document.querySelector("#grandParent").addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent Clicked!");
  },
  false
);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent Clicked!");
    e.stopPropagation();
  },
  false
);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child Clicked!");
  },
  false
);

//! Event Delegation

//? Event delegation in JavaScript is a pattern that efficiently handles events.
//? Events can be added to a parent element instead of adding to every single element.
//? This can be done on a particular target element using the .target property of an event object.

document.querySelector("#category").addEventListener("click", (e) => {
  console.log(e);
  if (e.target.tagName === "LI") {
    window.location.href = "/" + e.target.id;
  }
});

document.querySelector("#form").addEventListener("keyup", (e) => {
  console.log(e);
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//! Thinking Recursively

let user = {
  name: "Barath",
  address: {
    personal: {
      city: "Kanyakumari",
      state: "TamilNadu",
      area: "Kottar",
    },
    office: {
      city: "Chennai",
      area: {
        landmark: "Hi Tech",
      },
    },
  },
};

let magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else {
      finalObj[parent + "_" + key] = obj[key];
    }
  }
};

let finalObj = {};
magic(user, "user");

console.log(finalObj);

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    }
    return a;
  };
}

const Sum = a => b => b ? Sum( a + b ) : a;

console.log(add(1)(2)(3)(4)(5)());






