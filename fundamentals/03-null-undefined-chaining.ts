// Optional Chaining - How to avoid Null-Related Errors
let courseUser = null;
// {
//      textFields: {
//         title: "Typescript Bootcamp"
//      }
// };

const titleC = course?.textFields?.title ?? "No title found" ;

console.log(titleC);


if (courseUser?.textFields?.title) {
    console.log(`The title is ${courseUser.textFields.title}`);
    
} else {
    console.log("Go and sleep waii");
    
}

// tsc --watch 03-null-undefined-chaining.js