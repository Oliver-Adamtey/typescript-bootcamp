// Try as much to aviod the ANY TYPE in your codes 
// This prevents strict typing which can cause problems!
var lesssonsCount = 10;
lesssonsCount = true;
var numbersList = [10, 39, "Hi There!", true];
// Avoiding Implicit Any Types with the noImplicitAny Compiler Flag
printCourse(10, "TypeScript Any Type");
function printCourse(tittle, lesssonsCount) {
    console.log("Title:  ".concat(tittle, ", lessons count: ").concat(lesssonsCount));
}
