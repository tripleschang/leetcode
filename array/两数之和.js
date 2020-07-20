//优
var twoSum = function (nums, target) {
    var temp = [],
        len = nums.length;
    for (var i = 0; i < len; i++) {
        var dif = target - nums[i];
        if (temp[dif] != undefined) {
            return [temp[dif], i];
        };
        temp[nums[i]] = i;
    };
};

//一般
var twoSum = function(nums, target) {
    var result=[];
    for(var i=0;i<nums.length;i++){
       for(var j=i+1;j<nums.length;j++){
           if(nums[i]+ nums[j]===target){
               result=result.concat(i,j);
               return result;
           }
       }  
    }
};