var _a, _b, _c;
// Optional Chaining - How to avoid Null-Related Errors
var courseUser = null;
// {
//      textFields: {
//         title: "Typescript Bootcamp"
//      }
// };
var titleC = (_b = (_a = course === null || course === void 0 ? void 0 : course.textFields) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "No title found";
console.log(titleC);
if ((_c = courseUser === null || courseUser === void 0 ? void 0 : courseUser.textFields) === null || _c === void 0 ? void 0 : _c.title) {
    console.log("The title is ".concat(courseUser.textFields.title));
}
else {
    console.log("Go and sleep waii");
}
// tsc --watch 03-null-undefined-chaining.js
