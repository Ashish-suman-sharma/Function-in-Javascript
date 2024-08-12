function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  console.log(`Factorial of 0: ${factorial(0)}`);
  console.log(`Factorial of 5: ${factorial(5)}`);
  