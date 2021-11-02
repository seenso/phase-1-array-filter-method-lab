// Code your solution here
let findMatching = (arr, str) => {
  return arr.filter(driver => driver.toUpperCase() === str.toUpperCase());
};

let fuzzyMatch = (arr, str) => {
  return arr.filter(driver => driver.slice(0, str.length) === str);
};

let matchName = (arr, str) => {
  return arr.filter(driver => driver.name === str);
};