const fizzBuzz = (value) => {
//   for (let value = 1; value <= 20; value++) {
    if (value % 3 === 0 && value % 5 === 0) {
      return "FizzBuzz";
    //   console.log("FizzBuzz");
    } else if (value % 5 === 0) {
      return "Buzz";
    //   console.log("Buzz");
    } else if (value % 3 === 0) {
      return "Fizz";
    //   console.log("Fizz");
    } else {
      return value;
    }
//   }
};

module.exports = fizzBuzz;
