// Array Spread
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = [1, 2, 3];
//spreading it's scope
var moreNumbers = __spreadArray(__spreadArray([], numbers, true), [4, 5, 6], false);
console.log(moreNumbers);
var first = moreNumbers[0], second = moreNumbers[1], third = moreNumbers[2];
console.log(first, second, third);
