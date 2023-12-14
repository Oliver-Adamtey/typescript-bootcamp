//{ title: string; cb: (title: string) => void; }
function saveCourse(course, callback) {
    var _this = this;
    // setTimeout(function () {
    //     callback("success");
    // }, 100);
    this.course = course;
    setTimeout(function () {
        var _a, _b;
        callback((_b = (_a = _this.course) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "unknown course");
    }, 1000);
}
var cb = function (title) { return console.log("Save successful.", title); };
saveCourse({ title: "Typescript Bootcamp" }, 
// function() {
//     console.log("Save successful.");
// });
// () => {
//     console.log("Save successful.");
// });
cb);
