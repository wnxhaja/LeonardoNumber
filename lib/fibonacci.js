/**
 * Created by Abdul Jalil Laguindab on 2/3/2016.
 *
 * Function to calculate Fibonacci Number
 */

module.exports = fibonacci;

/**
 *
 * @param number, Index of the Fibonacci number
 * @returns {number} Fibonacci number
 */
function fibonacci(number) {
    if( number<0 ) throw new Error('Only whole numbers are allowed');

    if( number<=1 )
        return number;
    else
        return ( fibonacci( number-1 ) + fibonacci( number-2 ) ) ;

}

