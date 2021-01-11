const { expect } = require("chai");
const fizzBuzz = require("./test");

describe("fizzBuzz", () => {
 
  it("1 should be 1 ", () => {
    // GIVEN
    let value = 1;
    // WHEN
    const resultFizzBuzz = fizzBuzz(value);
    // THEN
    expect(resultFizzBuzz).to.equal(1);
  });
  it("3 should be Fizz ", () => {
    // GIVEN
    let value = 3;
    // WHEN
    const resultFizzBuzz = fizzBuzz(value);
    // THEN
    expect(resultFizzBuzz).to.equal("Fizz");
  });
  it("5 should be Buzz ", () => {
    // GIVEN
    let value = 5;
    // WHEN
    const resultFizzBuzz = fizzBuzz(value);
    // THEN
    expect(resultFizzBuzz).to.equal("Buzz");
  });

  it("15 should be FizzBuzz ", () => {
    // GIVEN
    let value = 15;
    // WHEN
    const resultFizzBuzz = fizzBuzz(value);
    // THEN
    expect(resultFizzBuzz).to.equal("FizzBuzz");
  });


})