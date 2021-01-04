//Fibonacci

/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    //using recursion 
    //base case 
    //high memory usage, mediocre speed 
    if(n === 1 || n === 0){
        return n;
    }
    
    //recursion
    return (fib(n-1)+fib(n-2)); 
    
};