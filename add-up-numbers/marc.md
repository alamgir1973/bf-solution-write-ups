# [Marc](https://edabit.com/user/6QR2QdW689ihtHjan)

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

Mark used recursion to build the sum from the base case upward.

- Base Case: The function checks if `num` is `1`. If so, it returns `1`, which
  stops the recursion.

- Recursive Step:
- If num is greater than `1`, the function returns `num` plus the result of
  calling `addUp(num - 1)`.

- Call Stack: With each recursive call, ´num´ decreases by `1`. Once the base
  case is reached, the stack starts resolving, summing up all the values from
  `1` to `num`.

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
