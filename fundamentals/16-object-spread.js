var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "TypeScript",
    subtitle: "Let's go harder",
    stats: {
        lessonsCount: 10
    }
};
// deep copy of the Course
var newCourse1 = {
    title: course.title,
    subtitle: course.subtitle,
    // stats: {
    //     lessonsCount: course.stats.lessonsCount
    // }
    // shallow copy 
    stats: course.stats
};
var newCourse = __assign({}, course);
console.log(newCourse);
course.stats.lessonsCount = 100;
console.log(newCourse);
