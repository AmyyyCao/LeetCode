//Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    //modify without using a new array
    //swap first and last, decrease counter until middle is found 
    //use temp variable to perform swap
    //slow runtime, but very little memory usage
    
    var temp = s[0];
    var end = s.length - 1;
    
    if(s === []){
        return 0; 
    }
    
    var i = 0;
    while(i < end){
        temp = s[i];
        s[i] =  s[end];
        s[end] = temp;
        i++;
        end--; 
    }
    
    return s; 
};