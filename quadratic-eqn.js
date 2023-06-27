function solveQuadratic(a, b, c) {
    // Calculate the discriminant.
    let discriminant = b * b - 4 * a * c;
  
    // If the discriminant is less than 0, there are no real roots.
    if (discriminant < 0) {
      return [];
    }
  
    // If the discriminant is equal to 0, there is one real root.
    else if (discriminant == 0) {
      return [-b / 2 * a];
    }
  
    // If the discriminant is greater than 0, there are two real roots.
    else {
      let root1 = (-b + Math.sqrt(discriminant)) / 2 * a;
      let root2 = (-b - Math.sqrt(discriminant)) / 2 * a;
      return [root1, root2];
    }
  }
  
  function main() {
    // Get the user input for a, b, and c
    let a = Number(prompt("Enter the value of a: "));
    let b = Number(prompt("Enter the value of b: "));
    let c = Number(prompt("Enter the value of c: "));
  
    // Solve the quadratic equation
    let roots = solveQuadratic(a, b, c);
  
    // Print the roots of the equation
    console.log(`The roots of the equation are ${roots}.`);
  }
  
  main();
  