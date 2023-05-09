/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var result = Infinity;
    var sum = 0;
    var start = 0;

    for(var i=0; i<nums.length; i++){
        sum += nums[i];
        while(sum >= target){
            result = Math.min(result, i - 1 + start);
            sum -= nums[start++];
        }
    }

    return (result !== Infinity) ? result : 0;
};