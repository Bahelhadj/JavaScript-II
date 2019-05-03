// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let bah = "Javascript is hard bros and girls"
function speak() {
  return bah;
}
console.log(speak());


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let count = 0; 
  return () => {
    return ++count;
  }
};
newcounter = counter();
console.log(newcounter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = (num1) => { 
  const simple = {
    increment: function () {
      return num1 + 1;
    } ,
    decrement: function () {
      return num1 - 1;
    }
  }
  return simple;
};
console.log(counterFactory(1).increment());
console.log(counterFactory(1).decrement());

  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
