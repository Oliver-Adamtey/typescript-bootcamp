function printCourse(title, subtitle, lessonsCount) {
    if (title === void 0) { title = "Title"; }
    if (subtitle === void 0) { subtitle = "Subtitle"; }
    if (lessonsCount === void 0) { lessonsCount = 0; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, ", Lessons count: ").concat(lessonsCount));
}
printCourse("TypeScript BootCamp", "Is time to do something great a bit", 10);
printCourse("TypeScript BootCamp", "Is time to do something great a bit");
printCourse();
