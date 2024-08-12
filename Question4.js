function createTaxCalculator() {
    const taxBrackets = [
      { limit: 10000, rate: 0.1 },
      { limit: 50000, rate: 0.2 },
      { limit: Infinity, rate: 0.3 }
    ];
  
    return function(income) {
      let tax = 0;
      let previousLimit = 0;
  
      for (const bracket of taxBrackets) {
        if (income > bracket.limit) {
          tax += (bracket.limit - previousLimit) * bracket.rate;
          previousLimit = bracket.limit;
        } else {
          tax += (income - previousLimit) * bracket.rate;
          break;
        }
      }
  
      return tax;
    };
  }
  
  const calculateTax = createTaxCalculator();
  
  console.log(`Tax for 5000 income: $${calculateTax(5000)}`);
  console.log(`Tax for 20000 income: $${calculateTax(20000)}`);
  console.log(`Tax for 60000 income: $${calculateTax(60000)}`);
  