// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let number1 = array1.join('');
  let number2 = array2.join('')
  
  return Number(number1) + Number(number2);
  
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let array = (String(value)).split('')
  let string = array.join('');
  let reversedArray = array.reverse();
  let reversedString = reversedArray.join('');
  
  if(string === reversedString){
    return true
  } else {
    return false
  }
  
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(!input){
    return 'Required field';
  }
  if(!Number(input)){
    return 'Must be a number besides 0';
  }
  return '';
}
