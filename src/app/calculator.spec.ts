import {Calculator} from './calculator';

describe('Calculator', () => {

  it('should add numbers', () => {
    const calculator = new Calculator();
    const sum = calculator.add(3 , 2);
    expect(sum).toBe(5);
  });
});
