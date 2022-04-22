# ASYNC-AWAIT

most functions don’t return promises. So what happens to promise-free functions? 

For functions that don’t return a promise, prepending async to the function definition will cause the return value to be wrapped in a promise. Which leads to this rule:

_Calls to async functions always return a promise._

If an async function’s implementation doesn’t return a promise, then JavaScript will wrap the returned value in a promise for you. And while this is nice and all, if all you wanted to do was wrap a value in a promise, it’d be easier to just use Promise.resolve()!



## The Async Operator

_When the await operator is passed a promise, it pauses the function until the promise resolves, and then it returns the promise’s result._

Await is a lot like promise.then(); they both wait for a promise to resolve and then make the outcome available to subsequently executed code. But unlike promise.then(), the await operator doesn’t require that you create a separate function to handle the outcome. Instead, it just returns it. Neat, huh?

### Await is Asynchronous

In fact, the only place where await can be used is within async functions. But why?

When JavaScript encounters an await operator, it needs to stop and wait until the given promise resolves. But this presents a problem: JavaScript can’t multitask; if it stops execution to wait for a response, the whole browser will stop responding!

To get around this, the await operator doesn’t really wait for a response. It just stops executing that particular function, and immediately continues on from the point where the function was called

```js

    async function main() {
  console.log("Getting quote from hitchhiker's guide...")

  let quotePromise = getQuote()
  let quote = await(quotePromise)

  console.log(quote)
}

main()
console.log("Done!")

```

_what would happen if your async function returned a result after the rest of the script had finished executing?_

```js

async function getQuote() {
  // Wait for 100ms to pass to simulate network activity
  await delay(100)

  return (
    "Since we decided a few weeks ago to adopt the leaf as legal " +
    "tender, we have, of course, all become immensely rich."
  )
}

let quote = getQuote()

// This line will be executed before `getQuote()` finishes executing,
// so `quote` can't contain the returned quote!
console.log(quote)

```
This async function’s return statement won’t be reached until after the script’s final console.log() has already been executed. So how could the console.log() access the returned quote? The answer, of course, is via a promise!

```js

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

async function getQuote() {
  await delay(100)

  return (
    "It is a mistake to think you can solve any major problems " +
    "just with potatoes."
  )
}

getQuote().then(quote => {
  console.log(quote)
})
```

Because the await operator doesn’t return a result until some point in the future, any functions that use await can only have their result accessed via a promise. 
_And that’s why async functions are the only place where await operators can be used: async functions are guaranteed to return a promise!_

### Awaiting Non-Promises

The await operator works with any value that you pass to it; it isn’t limited to promises. If you happen to pass something that’s not a promise, it’ll just return the value as is.

However, if you do use await with non-promises, keep in mind that await will never return immediately. Even if you await a normal value or an already-resolved promise, it will pause the function and wait until the rest of the script has completed execution — just like promise.then().

```js

async function printQuote() {
  let quote = await(
    "The ships hung in the sky in much the same way that bricks don’t."
  )

  console.log(quote)
}

printQuote()
```

### Parenthesis and precedence

One special thing about await is that it’s an operator. This means that you can use it without parenthesis.

```js

async function printRandomPrice() {
  console.log('BTC price: ', await getPricePromise('BTC'))
}

printRandomPrice()

```
Await expressions can be used anywhere within your code. They can be used within function calls, within object or array literals, or even as conditions within for or while loops. 

_In fact, you can even dive into an awaited result using . notation. But doing so without the parenthesis will lead to weeping and gnashing of teeth._

```js

async function fetchQuote() {
  return "Forty-two"
}

async function printQuoteLength() {
  let length = await fetchQuote().length

  // Huh?! Why is the length `undefined`?
  console.log(length)
}

printQuoteLength()
```
_You’ve probably figured out what’s happening in the above example: the . operator has a higher precedence than the await operator, and so await is being applied to fetchQuote().length. Because fetchQuote() is an async function, it returns a promise, and as promises don’t have a length property, the whole expression reduces to await undefined._
You can fix the above example by adding a set of parenthesis.

### When things go wrong

```js
async function whale() {
  // When an awaited promise is rejected, it throws an exception.
  await Promise.reject("Hello, ground!")
}

whale()
```

## Error handling with try/catch

Errors can be handled with promise.then() and promise.catch(), the required code is often tedious and prone to error.  

In contrast, the await operator doesn’t provide an error handling mechanism; it just assumes that any promise that you pass it will resolve successfully. 
If this assumption turns out to be incorrect and the promise is rejected, then await throws the error as an exception. 
This allows you to handle rejected promises in much the same way as you’d handle other exceptions: with a try/catch block.

```js

async function main() {
  try {
    await Promise.reject("kersplat!")
  }
  catch (error) {
    console.error("Something went wrong:", error)
  }
}

main()
```
-What would happen if you moved the try and catch block from the above example outside of the main() function, like so:_

```js

async function main() {
  await Promise.reject("kersplat!")
}

try {
  main()
}
catch (error) {
  console.error("Something went wrong:", error)
}

```
Moving the try/catch block changed the message in the console. The words “Something went wrong” disappeared, which means that the catch block wasn’t executed. But an exception was thrown; that’s why there’s still a message in the console.



### Exceptions within async functions

A function can’t both return a value and end with an exception — it just doesn’t make sense. But async functions always return a promise. So how do async functions handle exceptions?

_When an unhandled exception is thrown within an async function, the function’s returned promise is rejected, with the thrown object used as the reason._


Fix the below code, so that it logs “Something went wrong:” along with the error:
```js
async function main() {
  throw "kersplat!"
}

try {
  main()
}
catch (error) {
  console.error("Something went wrong:", error)
}
```




Was the problem that try and catch were the wrong way to handle errors in an async function?

```js
async function main() {
  throw "kersplat!"
}

main().catch(error => {
  console.error("Something went wrong:", error)
})
```
Or was the problem that main() didn’t need to be an async function in the first place?
```js
function main() {
  throw "kersplat!"
}

try {
  main()
}
catch (error) {
  console.error("Something went wrong:", error)
}
```
### Async functions block exception propagation

Async functions can be a bit of a mixed blessing. While they do make the await operator possible, they also prevent exceptions from propagating outside of the function. And because of this, converting a standard function to an async function can break existing code that uses try and catch.

In JavaScript, all manner of things can cause exceptions:

- Typos can cause exceptions.
- Calling Object.keys() on something that isn’t an object will cause an exception.
- Calling decodeURIComponent() on the wrong string will cause an exception.

These exceptions all result from incorrect input. But within async functions, you’ll usually deal with a different variety of exceptions: IO exceptions. 
And the thing about IO exceptions is that you know that you need to handle them. But when doing so, don’t forget to handle the more mundane exceptions too!

_Always log the caught error as the first line of your catch block._


## Flattening Promise Chains

One of the major benefits of the await operator is that it doesn’t silo its outcome within a handler function. This makes it possible to use the outcomes of multiple promises, without nesting calls to promise.then() or combining promises with Promise.all().

__Your task for this lesson is to refactor the code below to use async and await instead of promise.then() or Promise.all().__

```js

    import { getTicker, getPrice, writeLog } from './api'

    // Once you've got the refactored code working, change the error
    // probability to 0.5 or 1 to test the error handling code.
    setErrorProbability(0)

    function promisify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        fn(...args, (err, value) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(value)
        }
        })
    })
    }

    let getTickerPromise = promisify(getTicker)
    let getPricePromise = promisify(getPrice)
    let writeLogPromise = promisify(writeLog)


    console.info('Getting latest price and writing to log...')

    getTickerPromise()
    .then(ticker => {
        return getPricePromise(ticker).then(price => [ticker, price])
    })
    .then(([ticker, price]) => {
        return writeLogPromise(ticker, price)
    })
    .then(
        () => console.info("Done!"),
        err => console.error(err)
    )

```

```js

import { getTicker, getPrice, writeLog } from './api.js'

// Once you've got the refactored code working, change the error
// probability to 0.5 or 1 to test the error handling code.
setErrorProbability(0)

function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    fn(...args, (err, value) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(value)
      }
    })
  })
}

let getTickerPromise = promisify(getTicker)
let getPricePromise = promisify(getPrice)
let writeLogPromise = promisify(writeLog)

async function main() {
  try {
    console.info('Getting latest price and writing to log...')
  
    // Get the ticker and price
    let ticker = await getTickerPromise()
    let price = await getPricePromise(ticker)
    
    // Wait until the write completes before printing 'Done!'
    await writeLogPromise(ticker, price)
    
    console.info('Done!')
  }
  catch (e) {
    console.error(e)
  }
}

// No need to catch any errors, as the `main()` function
// uses a `try`/`catch` block to handle them internally.
main()

```

## Sequential Vs Parallel

When JavaScript encounters an await expression, it will always wait for that await to resolve before continuing. It doesn’t matter if it may seem possible to resolve multiple await expressions in parallel; JavaScript will always resolve them in series.

consider the situation where JavaScript encounters multiple await expressions in an object literal.

 The three await expressions are independent; their outcomes will be the same regardless of when they’re executed. This means that it’s possible to execute them in parallel. But JavaScript doesn’t care. It waits for each expression to evaluate before moving onto the next, and the example takes 3 times as long as is actually required.

```js
    let delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const fetchBtcPrice = () => delay(100).then(() => Math.random() * 1000)
    const fetchEthPrice = () => delay(100).then(() => Math.random() * 500)
    const fetchDogePrice = () => delay(100).then(() => Math.random() * 100)

    async function main() {
    console.log("Fetching prices...")
    let start = performance.now()
    let prices = {
        btc: await fetchBtcPrice(),
        eth: await fetchEthPrice(),
        doge: await fetchDogePrice(),
    }
    let end = performance.now()
    console.log(prices)
    console.log(`Done in ${parseInt(end - start)} milliseconds.`)
    }

    main()

```

There is a way to ensure parallel execution. 

_While JavaScript can only await one promise at a time, it’s possible to create multiple promises ahead of time. This allows you to have promises do work in parallel, while still awaiting results in series._

```js

    let delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    const fetchBtcPrice = () => delay(100).then(() => Math.random() * 1000)
    const fetchEthPrice = () => delay(100).then(() => Math.random() * 500)
    const fetchDogePrice = () => delay(100).then(() => Math.random() * 100)

    async function main() {
    console.log("Fetching prices...")
    let start = performance.now()
    let btcPricePromise = fetchBtcPrice()
    let ethPricePromise = fetchEthPrice()
    let dogePricePromise = fetchDogePrice()
    let prices = {
        btc: await btcPricePromise,
        eth: await ethPricePromise,
        doge: await dogePricePromise,
    }
    let end = performance.now()
    console.log(prices)
    console.log(`Done in ${parseInt(end - start)} milliseconds.`)
    }

    main()

```

## Refactoring exercise

_Your task is to refactor the exercise so that it doesn’t use promise.then() and Promise.all()._

```js
import {
  fetchImage,
  fetchModel,
  isHotdog,
  setSimulatedErrorProbability
} from './api'
import {
  renderImage,
  renderResult,
  renderError
} from './ui'

// To test your error handling code, change this from 0 to 0.5 or 1.
setSimulatedErrorProbability(0)

const IMAGE_URL = '/courses/async-javascript/hotdog.jpg'

// Fetch a promise to an image of a hotdog. You can also request
// `not-hotdog.jpg` from the same directory.
let imagePromise = new Promise((resolve, reject) => {
  fetchImage(IMAGE_URL, (error, image) => {
    if (error) {
      reject(error)
    }
    resolve(image)
    renderImage(image)
  })
})

Promise.all([
  imagePromise,
  fetchModel(),
])
  .then(([image, model]) => isHotdog(image, model))
  .then(renderResult)
  .catch(renderError)

```

Solution:

```js

import {
  fetchImage,
  fetchModel,
  isHotdog,
  setSimulatedErrorProbability
} from './api.js'
import {
  renderImage,
  renderResult,
  renderError
} from './ui.js'

// To test your error handling code, change this from 0 to 0.5 or 1.
setSimulatedErrorProbability(0)

// You can also set this to `not-hotdog.jpg` in the same directory.
const IMAGE_URL = '/courses/async-javascript/hotdog.jpg'

function fetchImagePromise(src) {
  return new Promise((resolve, reject) => {
    fetchImage(src, (err, value) => {
      if (err) {
        reject(err)
      }
      else {
        resolve(value)
      }
    })
  })
}

async function main() {
  try {
    let imagePromise = fetchImagePromise(IMAGE_URL)
    let modelPromise = fetchModel()
    let image = await imagePromise
    renderImage(image)
    renderResult(await isHotdog(image, await modelPromise))
  }
  catch (error) {
    renderError(error)
  }
}

main()
```


## Converting to promises

In general, callback accepting functions follow two rules:

- The callback is the final argument to the function
- If an error occurs, it’ll be passed as the first argument to the callback.  

Because of this, it’s possible to create a function that accepts a callback-accepting function, and returns a promise-returning function. Or to put it another way, you can create a function that converts callback-based functions into promise-based functions.

This function is often called promisify(). Here’s one way you could implement it.

```js

    function promisify(fn) {
    return (...args) => new Promise((resolve, reject) => {
        fn(...args, (err, value) => {
        if (err) {
            reject(err)
        }
        else {
            resolve(value)
        }
        })
    })
    }

```

## Cheatsheet 

Link: https://frontarm.com/courses/async-javascript/in-practice/cheatsheet/