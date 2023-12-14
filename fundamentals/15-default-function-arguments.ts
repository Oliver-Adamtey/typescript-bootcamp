


function printCourse (title:string = "Title", subtitle = "Subtitle", lessonsCount = 0) {
    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons count: ${lessonsCount}`);
    
}


printCourse(
    "TypeScript BootCamp",
    "Is time to do something great a bit",
    10
);

printCourse(
    "TypeScript BootCamp",
    "Is time to do something great a bit"
);

printCourse();