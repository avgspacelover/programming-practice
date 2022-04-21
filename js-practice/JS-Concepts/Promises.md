# Asynchronous JS, Promises, Fetch, AJAX

## Why Async?

_" The thing about IO operations is that they take time; there’s always a delay between the start of the operation and the response. And for JavaScript, this presents a slight problem."_

- Javascript is single-threaded.
- Browser can't interpret a running script[unlike python, ruby, java etc.)
- Browser can’t do anything until it finishes executing the last instruction in that script. I

So JavaScript can’t multitask. But it still needs to be able to do IO without freezing the browser. And to make this possible, it uses callbacks.

- The browser stores the callback while calling an IO function and handles the event by executing the callback

__Browser doesn't wait for it to complete before running__

__Chaining callbacks feels like hell__

```js

let element = document.getElementById('root')

function animate() {
    element.classList.add('keyframe-1');
    setTimeout(() => {
        element.classList.add('keyframe-2');
        setTimeout(() => {
            element.classList.remove('keyframe-1', 'keyframe-2');

            // Call the `animate` function again in 1 second
            setTimeout(animate, 1000)
        }, 1000);
    }, 1000);
}

animate()
```
__Very shitty and painful__

## Enter "Promises"

    How does it fix the problem?

    ```js 

        // Create a promise that resolves in `ms` milliseconds
    function delay(ms) {
    return new Promise(resolve => {
        window.setTimeout(resolve, ms)
    })
    }

    document.querySelector('#alert-button').onclick = () => {
        alert('Alert: you clicked "alert!"')
    }

    async function animate() {
        let box = document.querySelector('#box')
        box.classList.add('keyframe-1');
        // Before continuing, wait for the promise returned by `delay`
        await delay(1000);
        box.classList.add('keyframe-2');
        await delay(1000);
        box.classList.remove('keyframe-1', 'keyframe-2');
        setTimeout(animate, 1000)
    }

    animate()
```
## What are Promises?

Lets contrast it with Callbacks.   
- All Callbacks are a function, run is response to events(eg: timer, req returned from server)
- _Promises are objects that represent the outcome of an event that may not yet have occured. They store information about whether the event has occured yet, and if so, what it’s outcome was._


- Callbacks are defined independently of the operations that call them. They are passed into some function as an argument, stored until needed, and then called when a relevant event occurs.

- Promises are created and then returned by the function that initiated the asynchronous operation. When a relevant event occurs, the operation will store its result on the promise, which in turn can notify any success or failure handlers.

- Callbacks are generally called with information on whether an operation succeeded or failed, and must be able to handle both scenarios.

- Promises don’t handle anything by default, but success and failure handlers are attached later.

- Callbacks can be called multiple times by the functions that receive them.

- Promises can only represent one event - they are either successful once, or failed once.


## Making Promises

- JavaScript Promises are just instances of the built-in Promise class.

```js
let promise = new Promise(() => {});
```
__When you call new Promise, the browser will immediately call the function that you passed in — sometimes called the executor function. This function’s purpose is to start some asynchronous operation, like a timer or HTTP request, and then to notify the browser once the operation has resolved (i.e. successfully completed), or been rejected (i.e. failed).__

In order to notify the browser, the executor function receives two arguments. These arguments are themselves callable functions, typically named resolve and reject.   

Here’s how they work:

- Calling resolve(value) will mark the promise as resolved and cause any success handlers to be run.
- Calling reject(error) will cause any failure handler to be run.
- You only ever need to call resolve or reject once; you should never call both. Both resolve and reject accept an optional argument to which you can pass details about the operation’s result or error.

## Delay Promises

__To create a delay promise, you’ll need to call the executor function’s resolve argument after the desired delay. One way to do this is with setTimeout():__

```js
    // Returns a delay promise that resolves after `interval` milliseconds
    function delay(interval) {
        return new Promise(resolve => {
            setTimeout(resolve, interval)
        })
    }

    let promiseThatResolvesInOneSecond = delay(1000)

```

## Rejecting

say that you’re building an animation, and you want a promise that’ll resolve when it’s time to show the next frame. Because some of your users are on mobile, you only want to resolve the promise and show the next frame if the user’s hardware can keep up.

One way to do this would be to store the time at which the promise was created, and then call reject() if the actual interval is much longer than the requested interval.




```js

    function getFramePromise(interval, maxLag = 10) {
    let start = Date.now()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // `setTimeout()` isn't very precise, and can take much longer
            // than the request interval. So here we calculate the *actual*
            // interval by comparing the time now withto the time at which
            // `getFramePromise()` was called.
            let delta = Date.now() - start

            let lag = delta - interval
            if (lag > maxLag) {
                // If the actual delay was much longer than expected, we'll
                // reject the promise.
                reject(lag)
            }
            else {
                // Otherwise store the *actual* time difference as the
                // outcome of the promise.
                resolve(delta)
            }
        }, interval);
    });
}

let nextFramePromise = getFramePromise(40);
```

## Exceptions

If an execption is thrown within the executor function, the promise will be rejected.

To visualize how this this works, just imagine that the executor function’s contents are wrapped in a try/catch statement, like so:

```js

    var promise = new Promise((resolve, reject) => {
    try {
        // ...your code...
    }
    catch (e) {
        reject(e)
    }
});

```


## The Then Method

JavaScript promises are objects that represent the outcome of an event that may not yet have occured. Because of this, you can’t just access the event’s outcome through a property like promise.outcome. Instead, you’ll need to register a callback to handle the outcome once it becomes available, using the promise’s then() method.

There are three different ways that you can use promise.then(). Here they are in brief:

```js

// Call the first argument once the promise has successfully resolved
promise.then(value => {
    // ...
});

// Call the second argument if the promise is rejected
promise.then(null, error => {
    // ...
});

// You can handle both cases by passing in two functions
promise.then(
    value => { /* ... */ },
    error => { /* ... */ }
);

```
### Handling Success

You can think of the first argument to promise.then() as a success handler. If you pass in a function as the first argument, it will be called with the successful outcome of the promise (if the promise is indeed successful).

```js
import { getFramePromise } from './getFramePromise.js'

// This promise should resolve in 500ms, and will be rejected if it
// can't be resolved within 510ms.
let framePromise = getFramePromise(500, 10);

framePromise.then(delta => {
    console.log(`actual interval was ${delta}ms`)
})
```
_Note that if the promise has already resolved, then the success handler will be called almost immediately — but the browser will first wait for the current script to finish executing._

### Handling Rejection
```js
    import { getFramePromise } from './getFramePromise.js'

    // This promise is scheduled to resolve in 500ms, and will be rejected if it
    // can't be resolved within 499ms.
    let framePromise = getFramePromise(500, -1);

    framePromise.then(null, lag => {
        console.log(`took ${lag}ms too long`)
    })

```

### Handling Both

```js
    import { getFramePromise } from './getFramePromise.js'

// This promise is scheduled to resolve in 500ms, and will be rejected if it
// isn't resolved in *exactly* 500ms time.
let framePromise = getFramePromise(500, 0);

framePromise.then(
    delta => {
        console.log(`actual interval was ${delta}ms`)
    },
    lag => {
        console.log(`took ${lag}ms too long`)
    }
)
```
## Catch errors within success handlers too

When you supply a rejection handler to promise.then(), it will only be called if the promise itself is rejected. However, the rejection handler will not be called if an error occurs within the success handler.


## Syntactic Sugar for Promises

The new Promise() and promise.then() functions give you a lot of power. In fact, you can actually implement all of the other methods that JavaScript’s Promise API provides using just these two functions.

### Promise.resolve(value)

This function returns a promise that has already resolved to value, with one exception: if value is already a promise, it’ll just return that promise.


```js

    // This function expects a promise. It won't work with a string.
function printPromisedValue(promise) {
    promise.then(value => {
        console.log(value)
    })
}

// This could be a string *or* a promise to a string.
let maybePromise = Math.random() > 0.5
    ? "I'm a string!"
    : Promise.resolve("I'm a string promise!")

// Wrapping `maybePromise` with `Promise.resolve()` ensures that
// the result is a promise.
printPromisedValue(Promise.resolve(maybePromise))

```
### Promise.reject(value)

This function is like Promise.resolve(value), but instead of returning a resolved promise, it returns a rejected one.

implementation:

```js
    function reject(value) {
        return new Promise((resolve, reject) => reject(value))
    }
```

### promise.catch(onRejected)

promise.catch(handler) is equivalent to promise.then(null, handler).

```js 

    let failedPromise = Promise.reject("Oh shit, something went wrong.")

    failedPromise
        .catch(error => {
            console.error(error)
        })
```

### promise.finally(onSettled)

And finally, the promise.finally(handler) method let’s you call a function once a promise has settled, regardless of whether it has resolved successfully or rejected.

You could achieve the same thing by just passing your onSettled handler as both arguments of promise.then():

```js

    promise.then(onSettled, onSettled)
```
But well… why would you when you can just use promise.finally()?


## Chaining Promises

When you call a promise’s then() method, you’re not just assigning a handler to an existing promise. You’re also creating a new promise.

But what does the new promise resolve to? That depends on the success and rejection handlers that you’ve supplied!

```js

// `promise.then()` always returns a promise.
let newPromise = promise.then(handleSuccess, handleRejection)


```

The promise returned by then() will resolve to the value that was returned by the success or error handler.

```js

    const emptyPromise = Promise.resolve()

    const messagePromise = emptyPromise.then(() => {
        // `messagePromise` will return to this returned value.
        return "Don't Panic."
    })

    messagePromise.then(message => {
        console.log(message) // "Don't Panic."
    })

```

You can call then() directly on another then() expression, creating a chain of many different handlers.

```js

    // As `then()` returns a promise, you can chain `then()` calls together.
    Promise.resolve()
        .then(() => {
            return "Don't Panic."
        })
        .then(message => {
            console.log(message)
        })

```

### Passing through Promises

There is one special case where the promise returned by then() doesn’t resolve to the value returned by its success or error handler.

When the success or error handler returns a promise, the then() method will wait for that promise to resolve, and use its value for the returned promise.

```js

    // Simulates an operation on some data that takes an unknown
// amount of time.
const doTask = (data) => 
    new Promise(resolve =>
        setTimeout(
            () => resolve(data * data),
            Math.random()*1000
        )
    )

doTask(2)
    .then(result => {
        console.log('1st task complete. Result:', result)

        // The promise returned by `then()` will resolve with
        // the same value as this returned promise.
        return doTask(result)
    })
    .then(result => {
        console.log('2nd task complete. Result:', result)
        return doTask(result)
    })
    .then(result => {
        console.log('3rd task complete. Result:', result)
    });

```

_Chained promises are flat._

The above example perform a series of asynchronous actions, without creating a callback pyramid.

### Handled rejections don’t result in rejected promises

_When a rejection handler for then() returns a plain object or resolved promise, the resulting promise will always be successfuly resolved. It won’t be rejected._


```js
    function sendErrorReport(error) {
        console.error(`Hey admin, an error occured: "${error}".`)
        return new Promise(resolve =>
            setTimeout(resolve, Math.random()*1000)
        )
    }

    // Create a failed promise to simulate a failed task
    Promise.reject("Oh no.")
        .catch(error => {
            // Oh no, an error occured. Let's notify the admin.
            return sendErrorReport(error)
        })
        .then(
            // Finally, let's notify the user of how the task went.
            message => {
                // Uh... but the task didn't succeed, so why are we here?
                console.log("Success!")
            },
            message => {
                console.error("Failed :-(")
            }
        )
```
### what if you want your handlers to result in a rejected promise?

```js

function sendErrorReport(error) {
    console.error(`Hey admin, an error occured: "${error}".`)
    return new Promise(resolve =>
        setTimeout(resolve, Math.random()*1000)
    )
}

Promise.reject("Oh no.")
    .catch(error => {
        return sendErrorReport(error).then(() => {
            // Once the error report has successfully sent,
            // - We'll return a rejected promise
            // - Which will in turn cause `then()` to reject its
            //   returned promise
            // - Which will in turn cause `catch()` to rejects its
            //   returned promise
            return Promise.reject(error)
        })
    })
    .then(
        message => { console.log("Success!") },
        message => { console.error("Failed :-(") }
    )


```
PS: I DO NOT UNDERSTAND THE ABOVE CODE

### Exceptions in handlers result in rejected promises

The then() method must always return a promise. In the case that an exception occurs within the success or rejection handler, it will be caught, and the returned promise will be rejected.

_There are two ways to cause the promise returned by then() to be rejected. You can either return a rejected promise — or you can throw an error._

```js

function sendErrorReport(error) {
    console.error(`Hey admin, an error occured: "${error}".`)
    return new Promise(resolve =>
        setTimeout(resolve, Math.random()*1000)
    )
}

Promise.reject("Oh no.")
    .catch(error => {
        sendErrorReport(error)

        // You can re-throw a promise error, just like you would
        // in a try/catch block.
        throw error
    })
    .then(
        message => { console.log("Success!") },
        message => { console.error("Failed :-(") }
    )

```

_Just as with the executor function for new Promise, any exception thrown within a then() handler will turn into a rejected promise — even exceptions caused by JavaScript itself!_

```js

    function cleanUp() {
        // Do some stuff that needs to happen regardless of the result,
        // e.g. releasing database connections.
    }

    Promise.resolve()
        .then(() => {
            console.log("Hello, world!")
            consoel.log("What a lovely day it is!")
        })
        .catch(cleanUp)

```

There is a typo: I’ve typed consoel instead of console. This causes a ReferenceError to be thrown, but as the rejection handler doesn’t use the error, it disappears.

If you don’t take this into account when writing rejection handlers, debugging your app can become nightmarish. But there’s a simple solution: always make sure that you always log errors to the console in rejection handlers.

```js

    function cleanUp(error) {
    console.error(error)

    // Do some stuff that needs to happen regardless of the result,
    // e.g. releasing database connections.
}

Promise.resolve()
    .then(() => {
        console.log("Hello, world!")
        console.log("What a lovely day it is!")
    })
    .catch(cleanUp)
```
## RECAP

When you call a promise’s then() method, it returns a promise whose result depends on the behavior of the success or error handler that is used.

If the handler throws something, the returned promise will be rejected with the thrown value.

```js
// Promise is rejected after 1000ms with the string "Don't Panic."
let promise =
    delay(1000)
        .then(() => { throw "Don't Panic." })
```
If the handler returns a promise, then it’ll wait for that promise to resolve, and then use its value.

```js
// Promise is rejected after 2000ms with the string "Not again."
let promise =
    delay(1000)
        .then(() => delay(1000))
        .then({} => Promise.reject("Not again."))
```
Otherwise, the returned promise will resolve to whatever value was returned by the handler.

```js
// Promise resolves after 1000ms to the string "Forty-two"
let promise =
    delay(1000)
        .then(() => "Forty-two.")
```

## Combining Promises

JavaScript has two built-in functions for combining promises: Promise.all(), and Promise.race().

### Promise.all()

Promise.all() is one of my favorite functions ever. It takes an array of promises, and returns a single promise to the outcomes of all argument promises.

```js

let promises = [
    Promise.resolve('Hello, ground!'),
    Promise.resolve('Not again.'),
]

let combinedPromise = Promise.all(promises)

combinedPromise.then(outcomes => {
    console.log('first outcome:', outcomes[0])
    console.log('second outcome:', outcomes[1])
})

```
Say that you have two functions, getAccounts() and getPayments(), that fetch some data from the server and return a promise to the result.

Using the data from either of these functions is simple. You just call .then() on the returned promise.

```js

reportPlanPayments(accounts, payments, 'yearly')

```

Nested calls

```js

// Call `getPayments` immediately to start the two fetches in parallel.
let paymentsPromise = getPayments()

getAccounts().then(accounts => {
    paymentsPromise.then(payments => {
        reportPlanPayments(accounts, payments, 'yearly')
    })
})
```

But while this approach kinda works, it results in a hard-to-read callback pyramid. And… isn’t this exactly the type of problem that promises are supposed to solve?

Luckily, Promises.all() lets you accomplish the same thing without creating a callback pyramid. And combined with array destructuring, it let’s you rewrite the above example in a much clearer manner.

```js

// Get a promise to all required data
let dataPromise = Promise.all([
    getAccounts(),
    getPayments()
])

// Once the data is available, destructure it and build the report.
dataPromise.then(data => {
    let [accounts, payments] = data
    reportPlanPayments(accounts, payments, 'yearly')
})
```


### Rejected promises and Promise.all()

If any of the inputs to Promise.all() are rejected, then the returned promise will immediately be rejected with that same error value. The error handler will not have access to any other resolved or subsequently rejected promise values.

```js

    let accountsPromise = getAccounts()
let paymentsPromise = Promise.reject("Oh no.") 
let dataPromise = Promise.all([accountsPromise, paymentsPromise])

// As `paymentsPromise` was rejected, the error handler will not have
// access to the result of `accountsPromise`.
dataPromise.then(
    result => {
      console.log("success!", result)
    },
    error => {
        console.error(error)
    }
)
```


### Promises can be used more than once

It’s entirely possible to:

- Call promise.then() multiple times
- Pass a promise to Promise.all() multiple times 
- Or even to do a combination of both!

There’s no rule that says a promise can only be used once.

```js

    let dataPromise = Promise.all([
    getAccounts(),
    getPayments()
])

dataPromise.then(data => {
    let [accounts, payments] = data

    reportPlanPayments(accounts, payments, 'yearly')

    // Since the data is available, let's make some more reports!
    reportPlanBreakdown(accounts)
    reportTotalPayments(payments)
})
```

### Promise.race()

_Promise.race() takes an array of of promises, and returns a promise to the value of the first promise to resolve._

You can think of Promise.race() as a function that passes through the first promise to be resolved or rejected. The returned promise won’t be referentially equal to the input one, but otherwise they’ll be identical.


So what would you use it for? Apparently, you can use Promise.race() to implement timeouts.

```js

    // Create a promise that resolves after `ms` milliseconds
    let delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    // This promise resolves in 10 seconds
    let longRequestPromise =
        delay(10000).then(() => ({ data: 'Success!' }))

    // This promise resolves in 1 second
    let timeoutPromise =
        delay(1000).then(() => ({ data: 'Server seems busy...' }))

    Promise.race([    
        longRequestPromise,
        timeoutPromise,
    ]).then(response => {
        console.log(response.data)
    })

```
## Scheduling

When you call then() on a promise that has already resolved, the success or rejection handler isn’t called right away - instead, the browser waits for the current script to finish executing.

Because promise handlers aren’t immediately executed, you might imagine that they act a little like timers — giving the browser a chance to repaint and perform other important tasks before the handler is executed.

_In fact, promises aren’t like timers at all. If there are any promise handlers waiting to be executed when your script completes, they’ll be executed immediately._

```js

    // Create an already-resolved promise
    let resolvedPromise = new Promise(resolve => {
        resolve('fantastic!')
        console.log('executor function has completed!')
    })

    // Register a success handler
    resolvedPromise.then(value => {
        console.log('outcome is ', value)
    })

    console.log('script has completed!')
```
For example, you could create a waitUntil() function that blocks the browser from doing anything else by repeatedly calling Promise.then().

```js

function waitUntil(time) {
  return (
    Date.now() < time &&
    Promise.resolve(time).then(waitUntil)
  )
}
```

You can get some intuition for this by clicking the “start” button in this demo. This will cause the browser to be unresponsive for 2000ms, during which time clicking the “alert” button won’t do anything.


```js

// Implement wait by repeatedly calling `Promise.then()`
// until a certain amount of time has passed.
function waitUntil(time) {
  return (
    Date.now() < time &&
    Promise.resolve(time).then(waitUntil)
  )
}

document.querySelector('#start-button').onclick = () => {
    let box = document.querySelector('#box')
    box.classList.remove('keyframe-1', 'keyframe-2');
    waitUntil(Date.now() + 1000);
    box.classList.add('keyframe-1');
    waitUntil(Date.now() + 1000);
    box.classList.add('keyframe-2');
}

document.querySelector('#alert-button').onclick = () => {
    alert('Alert: you clicked "alert!"')
}
```

There are two things that you should keep in mind about this behavior:

- You can’t use promise.then() to keep the browser responsive by breaking up heavy tasks.
- You can use promise.then() without triggering an expensive layout or repaint.