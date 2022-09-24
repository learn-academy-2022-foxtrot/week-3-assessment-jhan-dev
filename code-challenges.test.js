// ASSESSMENT 3: Coding Practical Questions with Jest

// const { it } = require("node:test");
// const { describe } = require("yargs");

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
//
//
//  PROBLEM #1
//
// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

//First create a Test function that takes in an: //Input: num      //Output: array
describe("fibonacciSeq", () => {
  //Create an it function that will explain what is the purpose of the fibonaccsiSeq function
  it("Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
    //Given 1st testCase is to equal the Expected output: [1, 1, 2, 3, 5, 8]
    const fibLength1 = 6;
    expect(fibonacciSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8]);

    //Given 2nd testCase is to equal the Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
    const fibLength2 = 10;
    expect(fibonacciSeq(fibLength2)).toEqual([
      1, 1, 2, 3, 5, 8, 13, 21, 34, 55,
    ]);
  });
});

//After running yarn jest, I should expect a good fail prompt saying function is not defined.
//    ReferenceError: fibonacciSeq is not defined.

//To make the test pass I will need to create the function I was testing above and pass in a number parameter.
const fibonacciSeq = (num) => {
  //Create an empty array to hold result
  const seqArr = [];

  //Create num1 & num2 variables with value of 1 each
  let num1 = 1;
  let num2 = 1;

  //Create a for loop that will iterate until greater than or equal to num
  for (let i = 0; i < num; i++) {
    //Create fibonacci seq add variable called fAdd with the value of num1 + num2
    let fAdd = num1 + num2;

    //Push num1 into seqArr
    seqArr.push(num1);

    //Update num1 and num2 variables after push before next iteration
    num1 = num2;
    num2 = fAdd;
  }
  //Return seqArr holding all pushed values from loop
  return seqArr;
};

//===================================
// fibonacciSeq
//   ✓ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.164 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.60s.
//====================================
//
//
//  PROBLEM #2
//
// --------------------2) Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

//First create a Test function that takes in an:  //Input: obj      //Output: array sorted from least to greatest.
describe("sortObj", () => {
  //Create an it function that will explain what is the purpose of the sortObj function
  it("Create a function that takes in an object and returns an array of the numbers sorted from least to greatest.", () => {
    //Given 1st testCase is to equal the Expected output: [15, 15, 20, 30, 30, 60, 90]
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60,
    };
    expect(sortObj(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90]);

    //Given 2nd testCase is to equal the Expected output: [10, 15, 20, 45, 60, 65, 100]
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65,
    };
    expect(sortObj(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100]);
  });
});
//After running yarn jest, I should expect a good fail prompt saying function is not defined.
//    ReferenceError: sortObj is not defined

//To make the test pass I will need to create the function I was testing above and pass in a object parameter.
const sortObj = (obj) => {
  //Create an empty array to hold values from object later
  let sortedArr = [];

  //Use the For in loop to iterate the object w/ a var
  for (let val in obj) {
    //Push into the empty sortedArr by accessing obj[val] => ex: sunday: 100
    sortedArr.push(obj[val]);
    //Update the values in the array by using the .sort() method by comparing index values
    sortedArr = sortedArr.sort((a, b) => a - b);
  }
  //After iteration, return the sortedArr to display study minutes from least to greatest
  return sortedArr;
};

//===================================
// sortObj
//     ✓ Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.195 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.88s.
//====================================
//
//
//  PROBLEM #3
//
// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// b) Create the function that makes the test pass.

//First create a Test function that takes in an:  //Input: array      //Output: array w/ accumulating sum.
describe("accuSum", () => {
  //Create an it function that will explain what is the purpose of the arrSum function
  it("Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
    //Given 1st testCase is to equal the Expected output: [100, 83, 60, 51]
    const accountTransactions1 = [100, -17, -23, -9];
    expect(accuSum(accountTransactions1)).toEqual([100, 83, 60, 51]);

    //Given 2nd testCase is to equal the Expected output: [250, 161, 261, 165]
    const accountTransactions2 = [250, -89, 100, -96];
    expect(accuSum(accountTransactions2)).toEqual([250, 161, 261, 165]);

    //Given 3nd testCase is to equal the Expected output: []
    const accountTransactions3 = [];
    expect(accuSum(accountTransactions3)).toEqual([]);
  });
});
//After running yarn jest, I should expect a good fail prompt saying function is not defined.
//    ReferenceError: accuSum is not defined

//To make the test pass I will need to create the function I was testing above and pass in a array parameter.
const accuSum = (arr) => {
  //Create a result variable that is an array holding the arr[0] to keep the first value
  let result = [arr[0]];

  //Loop through the array parameter and start iteration at 1 until end of arr length by 1
  for (let i = 1; i < arr.length; i++) {
    //Sum up current value and next value into result after [0] of result arr
    result[i] = result[i - 1] + arr[i];
  }
  //Return the result array
  return result;
};

//=====================================
// accuSum
//     ✓ Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.188 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.64s.
//======================================
