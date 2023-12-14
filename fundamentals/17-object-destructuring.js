var myCourse = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonCount: 45
};
// destructuring
printMyCourse(myCourse);
function printMyCourse(course) {
    var title = course.title, subtitle = course.subtitle, lessonCount = course.lessonCount;
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", Lessons Count: ").concat(lessonCount));
}
