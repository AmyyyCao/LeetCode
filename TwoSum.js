//Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //return indices of two numbers such that they add up to the target 
    //iterate through list, take target and subtract numer at index, if number is anywhere else in array, return
    var leftover = 0;
    var array = [0,0];
    
    //not very good runtime complexity, O(n^2)
    
    for(var i=0; i < nums.length; i++){
            leftover = target - nums[i]; 
            for(var j = 0; j < nums.length; j++){
                //skip over the same element
                if (j===i){
                    continue;
                }
                else if(nums[j] === leftover){
                    array[0] = i;
                    array[1] = j;
                    return array; 
                }
            }
    }
};