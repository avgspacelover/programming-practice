/*
References

    https://roadsidecoder.hashnode.dev/javascript-interview-questions-currying-output-based-questions-partial-application-and-more
    https://www.youtube.com/watch?v=k5TC9i5HonI&ab_channel=RoadsideCoder
    https://www.youtube.com/watch?v=iZLP4qOwY8I&ab_channel=FunFunFunction
    https://www.youtube.com/watch?v=I4MebkHvj8g&ab_channel=DaveGray
    https://huynvk.dev/blog/currying-in-javascript-and-its-practical-usage

*/

const buildSandwich = condiments => veggies => cheese => `${condiments}, ${veggies}, ${cheese}`;

console.log( buildSandwich("red chilli")("capsisum & onion")("mozarella"));

console.log( buildSandwich("red chilli")("capsisum & onion"));

console.log( buildSandwich("red chilli"));


// examples of partial application

const curriedMultiply = x => y => x*(2*y);


const timesFour = curriedMultiply(4); // setting y
const timesEight = timesFour(2); // setting x

console.log("Times 8", timesEight);


//const updateElement = id=> content => document.querySelector(`${id}`).textContent = content;

//const updateHeaderText = updateElement("Header");
//updateHeaderText("whatsup homosapien!")

// examples of function composition

//----------------------------------

// currying a regular function

const curry = (func) => {

    return curried= (...args) => {

        if(func.length !== args.length){

            return curried.bind(null, ...args);
        } else {
            return func(...args);
        }
    }
}

const total = (x,y,z) => x + y + z;
const curriedTotal = curry(total);

console.log(curriedTotal(4)(5)(6))