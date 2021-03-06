// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const lastName = "Harris";
function writeName(){

  return lastName;
}
console.log("Closure Challenge 1 ", writeName());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function(){
    console.log(count++); //ok this worked but how count doesn't revert back to zero
  }
};
// Example usage: const newCounter = counter();
const newCounter = counter();
 newCounter(); // 1
 newCounter(); // 2
 newCounter();

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  // return {
  //   increment: function(count){
  //       return count++;
  //   },
  //   decrement: function(){
  //     count--;
  //   }
  //}
  let count = 0;
  return {
    increment() {
      return count++;
    },
    decrement(){
      return count--;
    }
  }
};
let county = counterFactory();
console.log("Closure Challenge 3 ", county.increment());
console.log("Closure Challenge 3 ", county.increment());
console.log("Closure Challenge 3 ", county.increment());
console.log("Closure Challenge 3 ", county.increment());

