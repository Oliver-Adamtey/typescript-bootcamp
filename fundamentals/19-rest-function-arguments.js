var course2 = {
    title: "Typescript Bootcamp",
    lessonsCount: 43
};
var course3 = {
    title: "Angular for Beginners",
    lessonsCount: 309
};
function printCourses(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title, course.lessonsCount);
    }
}
// printCourses("Welcome to the Angular University", [course2, course3]);
printCourses("Welcome to the Angular University", course2, course3);
