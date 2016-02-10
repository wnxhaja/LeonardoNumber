/**
 * Created by Abdul Jalil Laguindab on 2/3/2016.
 *
 * Functions to calculate Leonardo Number
 */


var fibonacci = require('./fibonacci');

var leoList = [1,1];

module.exports = {

    /**
     * Implementations of Leonardo number using loop.
     * @param number, Index of Leonardo number
     * @returns {number} Leonardo number
     */
    leonardo: function(number){

        var x = 1, // L(0)
            y = 1, // L(1)
            z;     // L(n) = L(n-1) + L(n-2) + 1

        if( number<0 ) throw new Error('Only whole numbers are allowed');

        if ( number<=1 ) return 1;

        for ( var i=2 ; i<=number ; i++ ){
            z = x + y + 1;
            x = y;
            y = z;
        }

        return z;

    },

    /**
     * Leonardo number calculation in terms of fibonacci
     * @param number, Index of Leonardo Number
     * @returns {number} Leonardo number
     */
    fibLeonardo: function(number){

        if( number<0) throw new Error('Only whole numbers are allowed');

        if ( number<=1 )
            return 1;
        else
            return ( 2*fibonacci( number+1 ) - 1 );

    },

    /**
     * Function to calculate Leonardo numbers using forward traversal.
     * @param number, Positive index of leonardo number
     * @returns {number} Leonardo number
     */
    forwardLeonardo: function(number){

        var x = leoList[0], // L(0)
            y = leoList[1]; // L(1)

        if( number<0 ) throw new Error('Only whole numbers are allowed');

        if (leoList[number]) return leoList[number];

        if ( number<=1 ) return 1;

        for ( var i = 2 ; i<=number ; i++ ){
            leoList[number] = nextLeoNumber(x,y); // L(n) = L(n-1) + L(n-2) + 1
            x = y;
            y = leoList[number];
        }

        return leoList[number];

    },

    /**
     * Function to calculate Leonardo numbers using backward traversal.
     * @param number number, Negative index of Leonardo number
     * @returns {number} Leonardo number
     */
    backwardLeonardo: function(number){

        var x = leoList[0], // L(0)
            y = leoList[1]; // L(1)

        if( number>=0 ) throw new Error('Only negative numbers are allowed');

        if (leoList[number]) return leoList[number];

        for ( var i=-1 ; i>=number ; i-- ){
            leoList[number] = prevLeoNumber(x,y); // L(n) = L(n+2) - L(n+1) - 1
            y = x;
            x = leoList[number];
        }

        return leoList[number];

    },

    /**
     *
     * @param i number, Previous index of Leonardo number index j
     * @param j number, Next index of Leonardo number index i
     * @param forward TRUE|FALSE, Traversal direction flag
     * @returns {number} Next|Previous Leonardo number
     */
    forwardBackwardLeonardo: function(i,j,forward){

        if(forward)
            return nextLeoNumber(i,j);
        else
            return prevLeoNumber(i,j);
    }
};

//Helper Functions
/**
 * @param i number, The next Leonardo Number lesser than j
 * @param j number, The next Leonardo Number greater than i
 * @returns {number} The next Leonardo Number greater than j
 */
function nextLeoNumber (i,j) {
    return i+j+1;
}

/**
 * @param i number, The next Leonardo Number lesser than j
 * @param j number, The next Leonardo Number greater than i
 * @returns {number} The next Leonardo Number lesser than i
 */
function prevLeoNumber(i,j) {
    return j-i-1;
}




