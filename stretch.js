// 1. Predict the output of the code below and explain why this is the output using what you learned today. When you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions


// (function(){
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));




// 2. Write a function that would allow you to do this using a closure. (This is another interview question we've seen before - when you're ready for answers, view an explanation [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions)).

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// function createBase(number) {
//     let baseNumber = 6;

//     function addSix(number) {
//         return baseNumber + number;
//     }

//     console.log(addSix(10));

// }

function createBase(base) {

console.log(number)

    return function(number) {
        return number + base;
    }
    // return (number) => base + number
}

//const createBase = base => number => number + base

// => function
const joinString = base => string => base + string


console.log(joinString)
const sayHello = joinString('Hello, my name is ')
console.log(sayHello)

 
console.log(sayHello("Mark"))
console.log(sayHello("Tim"))
console.log(sayHello("Tim"))




const addSix = createBase(6);
console.log(addSix(10));


// 3. Research the differences between functional programming and object oriented programming. Then, describe the pros and cons of functional programming vs object-oriented programming. This is a common interview question and great practice!

// Resources

// 📚 [Scope and Closures Guide](https://css-tricks.com/javascript-scope-closures/)

// 🧠 ["I never Understood Closures" Blog](https://medium.com/dailyjs/i-never-understood-javascript-closures-9663703368e8)

// ## Submission Format

// Follow these steps for completing your project.

// - [ ] Submit a pull request to merge <firstName-lastName> Branch into master (student's  Repo). **Please don't merge your own pull request**
// - [ ] Add your Team Lead as a reviewer on the pull request
// - [ ] Your Team Lead will count the project as complete by merging the branch back into master
