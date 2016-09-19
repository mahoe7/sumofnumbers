/**
 * Created by mhoe1 on 9/18/2016.
 */

//Sample array to test functions
let testList = [1, 2, 3, 4, 5];

/**
 * sumFor adds up the numbers in an array using a for-loop
 * @param list is the array to analyze
 * @returns {number} the sum of the numbers in the array
 */
function sumFor(list) {
  let sum = 0;
  for(let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor(testList));

/**
 * sumWhile adds up the numbers in an array using a while loop
 * @param list is the array to analyze
 * @returns {number} the sum of the numbers in the array
 */
function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while(i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile(testList));

/**
 * sumRecursion adds up the numbers in an array using recursion
 * @param list is the array to analyze
 * @returns {*} the sum of the numbers in the array
 */
function sumRecursion(list) {
  if(list.length == 0) {
    return 0;
  }
  else {
    return list[0] + sumRecursion(list.slice(1, list.length));
  }
}

console.log(sumRecursion(testList));

/**
 * sumTheSimpleWay adds up the numbers in an array using Underscore
 * @param list is the array to analyze
 * @returns {*} the sum of the numbers in the array
 */
function sumTheSimpleWay(list) {
  return _.reduce(list, function(memo, num) {
    return memo + num;
  });
}

console.log(sumTheSimpleWay(testList));