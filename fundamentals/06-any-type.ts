// Try as much to aviod the ANY TYPE in your codes 
// This prevents strict typing which can cause problems!

let lesssonsCount:any = 10;

lesssonsCount = true;

let numbersList: any [] = [10, 39, "Hi There!", true];

// Avoiding Implicit Any Types with the --noImplicitAny(Flag) Compiler Flag

printCourse(10, "TypeScript Any Type")

function printCourse (tittle, lesssonsCount) {
    console.log(`Title:  ${tittle}, lessons count: ${lesssonsCount}`);
    
}