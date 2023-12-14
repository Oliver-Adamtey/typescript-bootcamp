 


 type CourseStatus = "draft" | "published" | "unpublished" | "archived";

 let coursStatus:CourseStatus = "archived";

 let newStatus:CourseStatus = "unpublished";


 type Cours = {
    title: string,
    subtitle: string,
    lessCount: number
 };


 let cours: Cours = {
    title: "TypeScript Bootcamp",
    subtitle: "Learn the language simple",
    lessCount: 10
 };
