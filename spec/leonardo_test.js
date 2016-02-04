/**
 * Created by wnxhaja on 2/6/2016.
 */

var Leonardo = require('../lib/leonardo');


describe('Leonardo', function(){

    it('of 0 is 1', function(){

        var value = Leonardo.leonardo(0);

        expect(value).toBe(1);
    });

    it('of 1 is 1', function(){

        var value = Leonardo.leonardo(1);

        expect(value).toBe(1);
    });

    it('of 6 is 25', function(){

        var value = Leonardo.leonardo(6);

        expect(value).toBe(25);
    });

    it('of 0 is 1', function(){

        expect(function(){ Leonardo.leonardo(-1);}).toThrow();
    });

});

describe('Leonardo using fibonacci', function(){

    it('to compute leonardo of 0', function(){

        var expected = Leonardo.leonardo(0),
            value    = Leonardo.fibLeonardo(0);

        expect( value ).toBe( expected );
    });

    it('to compute leonardo of 1', function(){

        var expected = Leonardo.leonardo(1),
            value    = Leonardo.fibLeonardo(1);

        expect( value ).toBe( expected );
    });

    it('to compute leonardo of 6', function(){

        var expected = Leonardo.leonardo(6),
            value    = Leonardo.fibLeonardo(6);

        expect( value ).toBe( expected );
    });

    it('to compute leonardo of -1', function(){

        expect( function(){ Leonardo.leonardo(-1);} ).toThrow();
    });
});

describe('Backward, Forward traversal', function(){

    it('to compute leonardo of 10', function(){

        var expected = Leonardo.leonardo(10),
            value    = Leonardo.forwardLeonardo(10);

        expect( value ).toBe( expected );
    });

    it('to compute leonardo of -1', function(){
        var i = 1, //L(0)
            j = 1; //L(1)

        var expected = j - i - 1, // L(-1) = j - i - 1
            value    = Leonardo.backwardLeonardo(-1);

        expect( value ).toBe( expected );
    });

    it('to compute leonardo of 2', function(){
        var i = 1, //L(0)
            j = 1; //L(1)

        var expected = i + j + 1, // L(2) = i + j + 1
            value    = Leonardo.forwardLeonardo(2);

        expect( value ).toBe( expected );
    });
});