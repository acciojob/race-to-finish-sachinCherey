window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
// Function to create a promise that resolves after a random time between min and max seconds
function createRandomPromise(min, max) {
  const randomTime = Math.random() * (max - min) * 1000 + min * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(randomTime);
    }, randomTime);
  });
}

// Array to hold the promises
 promises = [
  createRandomPromise(1, 5),
  createRandomPromise(1, 5),
  createRandomPromise(1, 5),
  createRandomPromise(1, 5),
  createRandomPromise(1, 5)
];

// Use Promise.any() to wait for the first promise to resolve
Promise.any(promises)
  .then((result) => {
    // Get the output div element
    const outputDiv = document.getElementById('output');
    // Display the result in the output div
    outputDiv.textContent = `Resolved with time: ${result} seconds`;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
