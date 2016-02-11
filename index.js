/**
 * Created by wnxhaja on 2/7/2016.
 *
 * Answers for the problem
 */

module.exports = require('./lib/LeonardoTree');
module.exports = require('./lib/leonardo');


/**
 *  1.  ./lib/leonardo.js, function name: leonardo, O(n)
 *
 *  2.  L(n) = 2*F(n+1)-1
 *
 *  3.  O(n) ,  function name : fibLeonardo
 *
 *              What I know is that fibonacci can be optimized to O(log n) using the matrix identity and memoization.
 *              Therefore, we can use the formula in problem 2 to calculate the Leonardo then it optimized the time
 *              complexity to O(log n).
 *
 *              With my current implementation , I can apply memoization to it then as the data set goes larger then
 *              the time complexity will move closer to O(log n).
 *
 *  4. ./lib/leonardo.js, function name: forwardLeonardo, backwardLeonardo, forwardBackwardLeonardo
 *
 *  5. [-10..-1] = [67,-43,25,-17,9,-7,3,-3,1,-1]
 *
 *  6. ./lib/leonardo.js, function name: forwardLeonardo, backwardLeonardo
 *
 *  7. ./lib/LeonardoTree.js, function name : add, search
 *
 *  8. O(n)
 *  9. O(n)
 *  10.
 *
 */
