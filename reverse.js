//给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

var reverse = function(x) {
    let result = 0;
    while(x !== 0) {
        result = result * 10 + x % 10;
        x = (x / 10) | 0;
    }
    return (result | 0) === result ? result : 0;
};


//通过循环将数字 x 的每一位拆开，在进行整数反转时，每一步都判断是否溢出；
//溢出条件有两个，一个是大于整数最大值 MAX_VALUE，另一个是小于整数最小值 
//MIN_VALUE，设当前计算结果为 result，下一位为 pop；
//从 result * 10 + pop > MAX_VALUE 这个溢出条件来看：
//当出现 result > MAX_VALUE / 10 且还有 pop 需要添加时，则一定溢出；
//当出现 result === MAX_VALUE / 10 且 pop > 7 时，则一定溢出，7 是 2^31 - 1 
//的个位数（2^31 - 1 = 2147483647）。
//从 result * 10 + pop < MIN_VALUE 这个溢出条件来看：
//当出现 result < MIN_VALUE / 10 且还有 pop 需要添加 时，则一定溢出；
//当出现 result === MIN_VALUE / 10 且 pop < -8 时，则一定溢出，8 是 -2^31 
//的个位数（-2^31 = -2147483648）。


var reverse2 = function(x) {
    let result = 0;
    let value = Math.abs(x);
    let MIN_VALUE = - Math.pow(2,31);
    let MAX_VALUE = Math.pow(2,31) - 1;
    while (value !== 0) {
        let pop = value % 10;
        // 溢出判断
        if (result > MAX_VALUE / 10 || (result === MAX_VALUE / 10) && pop > 7) return 0;
        if (result < MIN_VALUE / 10 || (result === MIN_VALUE && pop < -8)) return 0;
        result = result * 10 + pop;
        value = Math.floor(value / 10);
    }
    return (x >= 0 ? result : - result);
};

