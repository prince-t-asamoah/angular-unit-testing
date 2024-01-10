import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  //using xit and pending in test case body disable test case

  it('should add two numbers', () => {
    let expectedResult: number;
    const mockLoggerService = jasmine.createSpyObj('LoggerSevice', ['log']);
    const calculator = new CalculatorService(mockLoggerService);

    const result = calculator.add(2, 2);
    expectedResult = 4;

    expect(result).toBe(expectedResult);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let expectedResult: number;
    const mockLoggerService = jasmine.createSpyObj('LoggerSevice', ['log']);

    const calculator = new CalculatorService(mockLoggerService);

    const result = calculator.subtract(2, 2);
    expectedResult = 0;

    expect(result).toBe(expectedResult);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
