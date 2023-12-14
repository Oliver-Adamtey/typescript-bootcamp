const courseName = "Typescript Bootcamp";

if (courseName) {
    printCourseName(courseName);
}
// subTitle = "Learn the language fundamentals before";
// console.log(subTitle);

function printCourseName(name :string) {

    console.log("The course name is: " + name.toUpperCase());
}


// Password Toggler 

function togglePassword(fieldId: string) {
    const password = document.getElementById(fieldId) as HTMLInputElement;

    if (password.type === 'password') {
        password.type = 'text';
    } else{
        password.type = 'password';
    }
}


// Form Handler

function handleFormSubmission(event: Event) {
    event.preventDefault();

    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('Cpassword') as HTMLInputElement).value;

    // const username = usernameInput.value;
    // const password = passwordInput.value;
    // const confirmPassword = confirmPasswordInput.value;


    console.log('Username: ', username);
    console.log('Password: ', password);
    console.log('Confirm Password: ', confirmPassword);

    // usernameInput.value = '';
    // passwordInput.value = '';
    // confirmPasswordInput.value = '';
    
}

const form = document.getElementById('signupForm') as HTMLInputElement;
form.addEventListener('submit', handleFormSubmission);