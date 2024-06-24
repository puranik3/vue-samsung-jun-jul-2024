## Questions

-   Why `this` refers to `globalThis` in arrow function methods of objects?
    -   If the function is called without being accessed on anything, this will be undefined — but only if the function is in strict mode.
    -   In global code, `this` is always `globalThis` regardless of strictness, because of the global context binding.  
        **Reference**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
