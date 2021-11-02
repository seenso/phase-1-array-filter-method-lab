// Code your solution here
let findMatching = (arr, str) => {
  return arr.filter(driver => driver.toUpperCase() === str.toUpperCase());
};

let fuzzyMatch = (arr, str) => {
  return arr.filter(driver => {
    // driver.toUpperCase().includes(str.toUpperCase()) === true;
    console.log(driver.toUpperCase().includes(str.toUpperCase()));
  });
};

let matchName = (arr, str) => {
  return arr.filter(driver => driver.name === str);
};