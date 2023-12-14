var book = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 45,
};
// destructuring
function printCourse(book) {
    var title = book.title, subtitle = book.subtitle, lessonsCount = book.lessonsCount;
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", Lessons Count: ").concat(lessonsCount));
}
