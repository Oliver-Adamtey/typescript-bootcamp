

interface Course {
    title:string;
    subtitle:string;
    lessonCount: number;
}

let myCourse:Course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonCount: 45
};

// destructuring
printMyCourse(myCourse);

function printMyCourse(course:Course) {
    const {title, subtitle, lessonCount} = course;

    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonCount}`);
    
}