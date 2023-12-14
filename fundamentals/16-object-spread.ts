


interface Course {
    title: string;
    subtitle: string;
    stats: {
        lessonsCount: number;
    }
}

let course: Course = {
    title: "TypeScript",
    subtitle: "Let's go harder",
    stats: {
        lessonsCount: 10
    }
};


// deep copy of the Course

const newCourse1 = {
    title: course.title,
    subtitle: course.subtitle,
    // stats: {
    //     lessonsCount: course.stats.lessonsCount
    // }
    
    // shallow copy 
    stats: course.stats
};

//Object Spread of shallow copy

const newCourse = {...course};

console.log(newCourse);

course.stats.lessonsCount = 100;

console.log(newCourse);
