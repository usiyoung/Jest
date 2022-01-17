const check = require('../check/check.js');

describe('check',()=>{
    let onSuccess;
    let onFail;

    beforeEach(()=>{
        onSuccess = jest.fn();
        onFail = jest.fn();
    })

    it('should call onSuccess when predicate is ture',()=>{
        check(()=> true,onSuccess,onFail);
        // expect(onSuccess.mock.calls.length).toBe(1);
        expect(onSuccess).toHaveBeenCalledTimes(1);
        expect(onSuccess).toHaveBeenCalledWith('yes');
        // expect(onFail.mock.calls.length).toBe(0);
        expect(onFail).toHaveBeenCalledTimes(0);

    })
    it('should call onFail when predicate is false',()=>{
        check(()=>false,onSuccess,onFail);
        // expect(onSuccess.mock.calls.length).toBe(0);
        expect(onSuccess).toHaveBeenCalledTimes(0);
        // expect(onFail.mock.calls.length).toBe(1);
        expect(onFail).toHaveBeenCalledWith('no');
        expect(onFail).toHaveBeenCalledTimes(1);
    })
})