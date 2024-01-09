import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  //using xit and pending in test case body disable test case
  it('should add two numbers', () => {
    let expectedResult: number;
    const calculator = new CalculatorService();

    const result = calculator.add(2, 2);
    expectedResult = 4;
    
    expect(result).toBe(expectedResult);
  });
  xit('should subtract two numbers', () => {});
});
