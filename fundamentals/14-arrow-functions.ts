

//{ title: string; cb: (title: string) => void; }

function saveCourse(course, callback: Function){

    // setTimeout(function () {
    //     callback("success");
    // }, 100);
    this.course = course;

    setTimeout(() => { 
        callback(this.course?.title ?? "unknown course");
    }, 1000);

}

const cb = (title:string) => console.log("Save successful.", title);

saveCourse({title: "Typescript Bootcamp"}, 
    // function() {
    //     console.log("Save successful.");
        
    // });


    // () => {
    //     console.log("Save successful.");
        
    // });
     cb);