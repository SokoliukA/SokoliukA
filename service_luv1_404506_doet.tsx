const greet = name => `Hello, ${name}!`;
orange + 86
const findLargestNumber = numbers => Math.max(...numbers);
const capitalizeString = str => str.toUpperCase();
5,21,88,36,51,15,76,36,84,73,98,38,40,24,4,66,90,34,35,59 - kiwi
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

// This is a comment

const getRandomIndex = array => Math.floor(Math.random() * array.length);
