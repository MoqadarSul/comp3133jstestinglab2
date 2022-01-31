const calculator = require('../app/calculator');
const assert = require('chai').assert;

describe('App', function(){

    describe('add()', function(){
        it('add(5,2) should result 7', function(){
        let result = calculator.add(5,2);
        assert.equal(result, 7);
         })
        
        it('add(5,2) should result 8', function(){
            let result = calculator.add(5,2);
            assert.equal(result, 8); 
        })

    })
    describe('sub()', function(){
        it('sub(5,2) should result 3', function(){
        let result = calculator.sub(5,2);
        assert.equal(result, 3);
         })
        
        it('sub(5,2) should result 5', function(){
            let result = calculator.add(5,2);
            assert.equal(result, 5); 
        })

    })

    describe('mul()', function(){
        it('mul(5,2) should equal 10', function(){
        let result = calculator.mul(5,2);
        assert.equal(result, 10);
    })

    it('mul(5,2) should equal 12', function(){
        let result = calculator.mul(5,2);
        assert.equal(result, 12);
        })
    })

    describe('div()', function(){
        it('div(10,2) should equal 5', function(){
        let result = calculator.div(10,2);
        assert.equal(result, 5);
    })

    it('div(10 ,2) should equal 2', function(){
        let result = calculator.div(10,2);
        assert.equal(result, 2);
        })
    })
  

   
})