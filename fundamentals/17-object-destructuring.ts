

interface Book {
    title:string;
    subtitle:string;
    lessonsCount: number;
}

let book: Book = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 45,
}

// destructuring

function printCourse(book:Book) {
    const {title, subtitle, lessonsCount} = book;

    console.log(`Title: ${title}, Subtitle: ${subtitle}, Lessons Count: ${lessonsCount}`);
    
}