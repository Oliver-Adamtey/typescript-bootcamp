// primitive types: number
var lessonsCount = 15;
var total = lessonsCount + 34;
console.log("total =", total);
// interface peopleUser {
//     name: string,
//     age: number,
// }
var peopleUser = [
    { name: "Nii", age: 24 },
    { name: "Kofi", age: 19 },
    { name: "Twi", age: 30 },
    { name: "Ama", age: 53 },
];
console.log(peopleUser);
// primitive types: string
var titleCourse = "Typescript Bootcamp";
titleCourse = "Welcome to Thursday!!";
var subTitle = "Learn the primitive types";
var fullTile = "".concat(titleCourse, ": ").concat(subTitle);
console.log(fullTile);
// primitive types: boolean
var published = false;
if (published) {
    console.log("The course is published");
}
else {
    console.log("The course is not published");
}
// primitive types: object
var course = {
    title: "Typescript",
    subtitle: "Learn the language fundamentals, build practical project",
    lessonsCount: 10,
    author: {
        firstName: "Oliver",
        lastName: "Adamtey"
    }
};
console.log("type of course is " + typeof course);
