console.log('first row');

setTimeout(() => console.log('second row'), 2000);

console.log('third row');

// Callbacks => functions passed into anothor function as an argument
// Then invoked inside outher function to complete some kind of routine or action
// They execute after our code

// Promises => a promise is an asynchronous action that may complete at some point and produce a value

// States:
// Pending   => operation still running (unfinished)
// Fulfilled => operation finished (the result is available)
// Failed    => operation failed (an error is present)

// Promise Flowchart:

// Executor (function): resolve (return data) reject (throws exception)

// then  => Success callback, after that redirects this callback to the resolver
// catch => Error callback,   after that redirects this callback to the rejecter

// AJAX (Asynchronous JavaScript And XML) API => Create Queries
  // => Background loading of dynamic content/data
  // => Load data from the Web server and render it

// Examples:

// Partial page rendering
  // => Load HTML fragment + show it in a <div>

// JSON service
  // => Load JSON object and display it  
  