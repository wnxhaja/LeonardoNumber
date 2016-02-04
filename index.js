/**
 * Created by wnxhaja on 2/7/2016.
 *
 * Answers for the problem
 */


(function(){

    var leonardo = require('./lib/leonardo');
    var fibonacci = require('./lib/fibonacci');

})();

/**
 *  1.  ./lib/leonardo.js , O(n)
 *
 *  2.  L(n) = 2*F(n+1)-1
 *
 *  3.  O(n) ,  What I know is that fibonacci can be optimized to O(log n) using the matrix identity and memoization.
 *              Therefore, we can use the formula in problem 2 to calculate the Leonardo then it optimized the time
 *              complexity to O(log n).
 *
 *              With my current implementation , I can apply memoization to it then as the data set goes larger then
 *              the time complexity will move closer to O(log n).
 *
 *  4. ./lib/leonardo.js
 *
 *  5. [67,-43,25,-17,9,-7,3,-3,1,-1]
 *
 *  6. ./lib/leonardo.js
 *
 *
 */

