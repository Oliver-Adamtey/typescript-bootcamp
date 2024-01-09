

interface Course {
    title:string;
    lessonsCount:number;
}

const course2:Course = {
    title: "Typescript Bootcamp",
    lessonsCount: 43
};

const course3: Course = {
    title: "Angular for Beginners",
    lessonsCount: 309
}

function printCourses(message:string, ...courses: Course[]) {
    console.log(message);

    for (let course of courses){
        console.log(course.title, course.lessonsCount);
        
    }
    
}

// printCourses("Welcome to the Angular University", [course2, course3]);

printCourses("Welcome to the Angular University", course2, course3);