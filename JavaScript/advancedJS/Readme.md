1. What is the difference between let, const, and var?

var is function-scoped and can be redeclared and reassigned. Variables declared with var are hoisted to the top of their scope, while let and const are block-scoped. let can be reassigned, but const cannot be reassigned or redeclared.

2. Explain null vs undefined.

null: null usually denotes an intentionally absent value, and developers can set a variable to null to signify the absence of an object or a value. For example, if an API call doesn't return data, you might set a variable to null.

undefined: undefined typically indicates a variable that has been declared but not yet been assigned a value, or a property that doesn't exist on an object.

3. Explain closures in JavaScript.

A closure is a function that retains access to its outer scope's variables even after the outer function has finished executing. This allows functions to have private variables and methods.

function createCounter() {
let count = 0;
return function() {
count++;
console.log(count);
};
}
const counter = createCounter();
counter(); // 1
counter(); // 2

4. What is the difference between == and ===?

== checks for equality with type coercion, meaning it converts the types of the variables to be the same before comparing.

=== checks for equality without type coercion, meaning it requires both the type and the value to be the same.

5. What is hoisting?

Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their respective scope during compilation. This means that we can use functions and variables before they are declared.

While variables declared with var are hoisted and initialised with undefined.

variables declared with let and const are hoisted but not initialised, resulting in a "temporal dead zone".

6. What is the "this" keyword in JavaScript?

this refers to the context in which a function is called. Its value depends on how the function is invoked.

In the global context, this refers to the global object (window in browsers).

In a function, this refers to the global object in non-strict mode and undefined in strict mode.

When used inside a method of an object, this refers to the object that owns the method.

Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context.

7. What are Promises and how do they work?

Promises are used for handling asynchronous operations. Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. A Promise can be in one of three states: pending, fulfilled, or rejected. Promises provide a cleaner, more flexible way to handle asynchronous operations compared to traditional callback functions.
then, catch, and finally methods are used for handling outcomes.

const promise = new Promise((resolve, reject) => {
setTimeout(() => resolve('Success!'), 1000);
});
promise.then(result => console.log(result)); // Success! (after 1 second)

const p1 = new Promise((resolve, reject) => {
setTimeout(() => resolve("p1 success"), 3000);
});
const p2 = new Promise((resolve, reject) => {
setTimeout(() => resolve("p2 rejected"), 2000);
});
Promise.all([p1, p2]).then((result) => {console.log(result);});
Promise.allSettled([p1, p2]).then((result) => {console.log(result);});
Promise.race([p1, p2]).then((result) => {console.log(result);});
Promise.any([p1, p2]).then((result) => {console.log(result);});

8. Explain the event loop in JavaScript.

   The event loop is a mechanism that handles asynchronous operations in JavaScript. It allows JavaScript to perform non-blocking operations by executing callbacks in a single-threaded environment. The event loop continuously checks the call stack and the message queue, and if the call stack is empty, it pushes the first callback from the queue to the call stack for execution.

9. What is the difference between call(), apply(), and bind()?

   call() and apply() both invoke a function with a given value and arguments. call() takes arguments as a comma-separated list, while apply() takes arguments as an array. bind() returns a new function, permanently binding this value and arguments.

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

10. What is event delegation?

    Event delegation is a technique where a single event listener is added to a parent element to manage all child elements' events. This leverages the event bubbling mechanism, where events triggered on child elements bubble up to the parent element, allowing the parent to handle events for multiple child elements efficiently.

11. How do you handle asynchronous code in JavaScript?

    Asynchronous code can be handled using callbacks, Promises, and the async/await syntax. Promises and async/await provide a more readable and manageable way to handle asynchronous operations compared to traditional callbacks.

12. Explain arrow functions.

    Arrow functions have a shorter syntax compared to traditional function expressions, making the code more readable and easier to write.

    Lexical this Binding: Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context

    Implicit Return: Arrow functions with a single expression automatically return the result of that expression, eliminating the need for the return keyword.

13. What is async/await?

    async/await provides a way to handle asynchronous code in JavaScript that is more readable and easier to manage compared to traditional promise chaining.

    An async function always returns a promise, and await pauses the execution until the promise is resolved.

async function fetchData() {
const response = await fetch('https://api.example.com/data');
const data = await response.json();
console.log(data);
}
fetchData();

14. What is an IIFE (Immediately Invoked Function Expression)?

    An IIFE (Immediately Invoked Function Expression) is a function that is defined and immediately executed. It helps to avoid polluting the global scope, creating a private scope for variables, encapsulating code, and performing initialization tasks. The IIFE pattern is widely used in JavaScript to manage scope and dependencies effectively.

15. What is the difference between map, filter, and reduce?

    map(): It applies a given function on all the elements of the array and returns the updated array.

    filter(): The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

    reduce(): The reduce() method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

16. What are higher-order functions?

    Higher-order functions are functions that can take other functions as arguments or return functions as their result.

    map(), filter(), reduce()

    Currying is a functional programming technique that involves breaking down a function that takes multiple arguments into a series of functions that take one argument each. This creates a chain of functions, where each function returns another function until the final result is achieved.

17. What is memoization?

    Memoization is an optimization technique where the results of expensive function calls are cached and returned when the same inputs occur again.
    Caching results of API calls to reduce latency and server load.

18. What is a callback function?

    Callbacks are commonly used in JavaScript, especially in scenarios involving events, asynchronous operations like fetching data from a server, and handling user input.

19. What is the “new” keyword in JavaScript?

    The new keyword in JavaScript is a reserved keyword used to create instances of user-defined object types or constructor functions. When used with a constructor function, new performs several operations behind the scenes to create and initialise a new object.

20. What is a promise chain?

    It allows you to perform a sequence of asynchronous tasks one after another, ensuring that each task starts only after the previous one has completed successfully.

21. What is event bubbling and event capturing in JavaScript?

    Event bubbling is the process where an event triggered on the innermost target element propagates up through its ancestors in the DOM hierarchy. Event capturing is the reverse process, where the event is captured first by the outermost element before reaching the target.

// Use addEventListener with the third argument true to enable capturing.

<div onclick="console.log('div')">
  <button onclick="console.log('button')">Click me</button>
</div>
document.querySelector('div').addEventListener('click', () => console.log('div'), true);
document.querySelector('button').addEventListener('click', () => console.log('button'), true);
Clicking the button logs: 
div
button

22. What is the difference between map() and forEach() methods for arrays?

    map() returns a new array with the results of calling a provided function on every element in the array.
    forEach() returns undefined. It simply executes a provided function once for each array element.

    map() returns a new array, you can chain other array methods after it.
    forEach() doesn't return anything, so you can't chain methods after it.

23. What is Debouncing ?

    Debouncing is a way of delaying the execution of a function until a certain amount of time has passed since the last time it was called.
    This can be useful for scenarios where we want to avoid unnecessary or repeated function calls that might be expensive or time-consuming.

function debounce(func, delay) {
let timeout;
return function(...args) {
clearTimeout(timeout);
timeout = setTimeout(() => func.apply(this, args), delay);
};
}
window.addEventListener('resize', debounce(() => console.log('Resized'), 200));

23. What is Throttling?

    Limits the function execution for a limited number of times

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
window.addEventListener('scroll', throttle(() => console.log('Scrolled'), 200));

24. How does prototypal inheritance work in JavaScript?

Prototypal inheritance allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype from which it can inherit methods and properties.

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
obj2.**proto** = obj1;
console.log(obj2.getInfo());
