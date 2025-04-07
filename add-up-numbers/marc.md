# [ldq](https://www.codewars.com/users/ldq)

```js
function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}
```

## Strategy

This problem requires summing all integers from 1 up to a given number `num`.
Marc chose a recursive strategy, which involves solving the problem by reducing
it into smaller instances of itself. This technique is elegant and demonstrates
the concept of self-referential functions, breaking down the problem until a
simple base case is reached.

## Implementation

Marc wrote a recursive implementation that uses a conditional base case and a
recursive step to compute the `sum`. The trickiest bit is understanding how the
recursion unfolds, stacking calls until the base case is hit, then resolving
back up to the final result. ``

- Traditional function with explicit return: Mark’s solution uses a standard
  function with explicit return statements, one for the base case `(num === 1)`
  and one for the recursive step.
- Base case with conditional: The function checks if `num === 1`, returning 1 to
  stop the recursion. This anchors the process, ensuring it doesn’t run
  indefinitely.
- Recursive step: For any `num` greater than 1, the function returns `num` plus
  the result of calling `addUp` on `num - 1`, effectively summing all numbers
  from 1 up to `num`.

## Possible Refactors

Marc’s recursive implementation could be rewritten or optimized in several ways:

- Iterative Approach: Use a for or while loop to accumulate the `sum` in a
  variable (like Gabriel’s version).

- Mathematical Formula: Use `(num * (num + 1)) / 2` to compute the `sum` in
  constant time.

## References

This solution was interesting because of how Marc used recursion to elegantly
solve the problem.

- Recursive functions in JavaScript:

  [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#recursion)

- Recursion in JavaScript:

  [MDN Web Docs - Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)
