/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var curSum = nums[0];
    var maxSum = nums[0];

    for(var i=1; i<nums.length; i++){
        var num = nums[i];

        var curSum = Math.max(num, curSum + num);
        var maxSum = Math.max(curSum, maxSum);
    }

    return maxSum;
};