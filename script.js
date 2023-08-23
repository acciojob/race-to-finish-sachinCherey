// script.js

// Function to create a promise that resolves after a random time
function createRandomPromise() {
  const randomTime = Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Resolved after ${randomTime} milliseconds`);
    }, randomTime);
  });
}

// Create an array of promises
const promises = [
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise(),
  createRandomPromise()
];

// Wait for the first promise to resolve using Promise.any()
Promise.any(promises)
  .then(result => {
    // Print the result to the output div
    const outputDiv = document.getElementById("output");
    outputDiv.textContent = result;
  })
  .catch(error => {
    console.error("All promises rejected:", error);
  });
