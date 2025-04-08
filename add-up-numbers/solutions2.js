/**
 * Calculates the sum of all positive integers from 1 up to the given number.
 * Uses recursion.
 *
 * @param {number} num - The upper limit of the sum (inclusive). Must be 1 or greater.
 * @returns {number} - Return the sum of integers from 1 to num (e.g., addUp(4) returns 1+2+3+4=10).
 */
export function addUp(num) {
    if (num === 1) return 1;
    return num + addUp(num - 1);
}
