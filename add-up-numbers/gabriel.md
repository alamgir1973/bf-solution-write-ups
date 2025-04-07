# [Gabriel](https://edabit.com/user/akYGmQ9iZcZm2d8BP)

```js
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
```

## Strategy

This problem requires calculating the sum of all integers from 1 to a given
number. Gabriel chose an iterative strategy, using a loop to incrementally add
each number from 1 up to the input number. This approach builds the sum
step-by-step, relying on a running total that accumulates each value in
sequence.

## Implementation

Gabriel implemented the solution using a `for` loop inside a standard function.

- Variable Initialization: A variable `sum` is initialized to 0 to hold the
  running total.

- Loop Construction: A `for` loop is set to iterate from `1` to `num` inclusive.

- Accumulation: On each iteration, the loop adds the current index `i` to `sum`.

- Return Statement: After the loop concludes, the final value of `sum` is
  returned.

This method is efficient and readable, especially for beginners or those
learning control structures like loops.

## Possible Refactors

This iterative approach is solid, but other implementations could offer
different trade-offs:

- Mathematical Formula: Replace the loop with `(num * (num + 1)) / 2` for a
  constant-time solution.

- Recursion: Use a recursive function like Mark's example to demonstrate a
  divide-and-conquer technique.

- While Loop: Use a `while` loop instead of a for loop `for` the same logic, j
  ust with a different control structure.

## References

This solution is a textbook example of using a loop to build up a result
iteratively. It’s commonly taught in introductory programming courses as a
foundational concept in procedural programming.

JavaScript for loop documentation:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) -
  for loop

JavaScript function basics:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
  Functions - MDN

Summation Techniques in Programming:

- [Wikipedia](https://en.wikipedia.org/wiki/Summation) - Summation
