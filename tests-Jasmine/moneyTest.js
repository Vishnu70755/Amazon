    import {formatCurrency} from '../scripts/utils/money.js'

   describe('formatcurrency test cases ',()=>{
    it('should return the cents to dollors',()=>{
        expect(formatCurrency(1000)).toEqual('10.00')
    });
    
    it('works with zero',()=>{
        
        expect(formatCurrency(0)).toEqual('0.00')
    });
    it('works with rounding ',()=>{
        
        expect(formatCurrency(2000.6)).toEqual('20.01')
    });
   })