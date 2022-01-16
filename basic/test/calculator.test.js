const Calculator = require('../calculator.js');

describe('Calculator', ()=>{
  let cal;
  beforeEach(()=>{
    cal = new Calculator();
  })
  it('inits with 0',()=>{
    expect(cal.value).toBe(0);
  })
  it('sets',()=>{
    cal.set(9);

    expect(cal.value).toBe(9);
  })
  it('clear', ()=>{
    cal.set(9);
    cal.clear();

    expect(cal.value).toBe(0);
  })
  it('add',()=>{
    cal.set(3);
    cal.add(3);

    expect(cal.value).toBe(6);
  })
  it('add error',()=>{    
    expect(()=>{
      cal.add(101)
    }).toThrow('Value can not be greater than 100');
  })
  it('subtract',()=>{
    cal.set(4);
    cal.subtract(2);

    expect(cal.value).toBe(2);
  })
  it('multiply',()=>{
    cal.set(5);
    cal.multiply(4);

    expect(cal.value).toBe(20);
  })
  describe('divide',()=>{
    it('0/0 === NaN',()=>{
      cal.set(0);
      cal.divide(0);

      expect(cal.value).toBe(NaN)
    })
    it('1/0 === Infinity',()=>{
      cal.set(1);
      cal.divide(0);

      expect(cal.value).toBe(Infinity)
    })
  })
})
