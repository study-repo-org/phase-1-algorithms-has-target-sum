function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}


/* 
  Write the Big O time complexity of your function here
  
  O(n) = n number of arrays that we have
*/

/* 
  Add your pseudocode here
   as a function thats takes in parameter =  array[40 ,8 , 8, 10] , target 50
  empty array =  n=[].
  Iterate through each number in the array = array[40 ,8 , 8, 10] | 40 8 8 10
  Calculate the number by subtracting the target = 40 8 8 10 - 50
  If the complement exists in the set, return true. = 40 8 8 10 = 50 | true
  Otherwise, add the current number to the seenNumbers set = 4 8 8 1 | false
  loop through to  find a pair, return false.
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
