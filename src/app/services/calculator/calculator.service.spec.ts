import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  //using xit and pending in test case body disable test case
  let mockLoggerService: any;
  let calculator: CalculatorService;
  let expectedResult: number;

  beforeEach(() => {
    mockLoggerService = jasmine.createSpyObj('LoggerSevice', ['log']);
    calculator = new CalculatorService(mockLoggerService);
    expectedResult = 0;
  })

  it('should add two numbers', () => {
    const result = calculator.add(2, 2);
    expectedResult = 4;

    expect(result).toBe(expectedResult);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    const result = calculator.subtract(2, 2);
    expectedResult = 0;

    expect(result).toBe(expectedResult);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
