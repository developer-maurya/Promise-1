
//  A Promise is an object representing the eventual completion or failure of
//  an asynchronous operation.

const promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((message) => console.log(message)) 
  .catch((error) => console.error(error));

//  How do you chain Promises?  

const add = (a, b) => Promise.resolve(a + b);

add(2, 3)
  .then((sum) => add(sum, 4)) 
  .then((result) => console.log(result)) 
  .catch((error) => console.error(error));

//  How do you handle multiple Promises simultaneously? 

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(20);
const promise3 = Promise.resolve(30);

Promise.all([promise1, promise2, promise3])
  .then((values) => console.log(values)) 
  .catch((error) => console.error(error));

Promise.race([promise1, promise2, promise3])
  .then((value) => console.log(value))
  .catch((error) => console.error(error));


