/*
  Computes the total by summing all integers starting from 1 up to the specified number.
 
  @function addUp
  @param {number} num - The maximum positive integer (up to 1000) to include in the sum.
  @returns {number} sum -The cumulative sum from 1 to `num`.
 
  @example
  addUp(4) // Expected output: 10
  addUp(6) // Expected output: 21
  addUp(11) // Expected output: 66
 
*/

export function addUp(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
