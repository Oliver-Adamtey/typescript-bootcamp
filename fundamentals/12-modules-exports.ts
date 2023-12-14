

const PAGE_SIZE = 100;

const COURSE = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the language simple",
 };



 import printCourse from "./13-default-exports";

//  import {COURSE_TOTAL, TYPESCRIPT_COURSE, printCourse} from "./13-default-exports";
 import * as constants  from "./13-default-exports";

 printCourse({})