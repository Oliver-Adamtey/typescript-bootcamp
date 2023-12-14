// primitive types: number

const lessonsCount = 15;

const total = lessonsCount + 34;

console.log("total =", total);

// interface peopleUser {
//     name: string,
//     age: number,
// }
const peopleUser = [
    {name: "Nii", age: 24},
    {name: "Kofi", age: 19},
    {name: "Twi", age: 30},
    {name: "Ama", age: 53},
]

console.log(peopleUser);


// primitive types: string
let titleCourse = "Typescript Bootcamp";
titleCourse = "Welcome to Thursday!!"
let subTitle = "Learn the primitive types";

const fullTile = `${titleCourse}: ${subTitle}`;
console.log(fullTile);


// primitive types: boolean

const published = false;

if (published) {
    console.log("The course is published");
} else{
    console.log("The course is not published");
    
}


// primitive types: object

let course = {
    title: "Typescript",
    subtitle: "Learn the language fundamentals, build practical project",
    lessonsCount: 10,
    author: {
        firstName: "Oliver",
        lastName: "Adamtey"
    }
};

console.log("type of course is " + typeof course);
 