function curry(fn) {
    return function curried(...args) {
      if (args.length >= fn.length) {
        return fn(...args);
      } else {
        return (...newArgs) => curried(...args, ...newArgs);
      }
    };
  }
  
  function add(a, b) {
    return a + b;
  }
  
  const curriedAdd = curry(add);
  
  console.log(curriedAdd(2)(3)); 
  console.log(curriedAdd(10)(20)); 
  