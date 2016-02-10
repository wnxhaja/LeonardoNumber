/**
 * Created by wnxhaja on 2/6/2016.
 */

var fibonacci = require('../lib/fibonacci');

describe('fibonacci', function(){

    it('of 0 is 0', function(){
        var value = fibonacci(0);

        expect(value).toBe(0);
    });

    it('of 1 is 1', function(){
        var value = fibonacci(1);

        expect(value).toBe(1);
    });

    it('of 6 is 8', function(){
        var value = fibonacci(6);

        expect(value).toBe(8);
    });

    it('of negative number is error', function(){

        expect(function(){ fib.fibonacci(-1);}).toThrow();
    });
});