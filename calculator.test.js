const Calculator = require('../calculator');

describe('Calculator', ()=>{
  let cal;
  beforeEach(()=>{
    cal = new Calculator();
  });

  it('inits with 0', ()=>{
    expect(cal.value).toBe(0);
  }),
  
  it('sets',()=>{
    cal.set(3);
    expect(cal.value).toBe(3);
  }),

  it('clear', () =>{
    cal.set(4)
    cal.clear();
    expect(cal.value).toBe(0);
  }),

  it('add',()=>{
    cal.set(3)
    cal.add(5);
    expect(cal.value).toBe(8);
  }),

  it('subtract',()=>{
    cal.set(3)
    cal.subtract(5);
    expect(cal.value).toBe(-2);
  }),

  it('multiply',()=>{
    cal.set(3)
    cal.multiply(5);
    expect(cal.value).toBe(15);
  }),
  it('0 / 0 === NaN',()=>{
    cal.set(0)
    cal.divide(0);
    expect(cal.value).toBe(NaN);
  }),
  it('1 / 0 === Infinity',()=>{
    cal.set(1)
    cal.divide(0);
    expect(cal.value).toBe(Infinity);
  }),
  it('divide',()=>{
    cal.set(4)
    cal.divide(4);
    expect(cal.value).toBe(1);
  });
});