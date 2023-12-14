var courseName = "Typescript Bootcamp";
if (courseName) {
    printCourseName(courseName);
}
// subTitle = "Learn the language fundamentals before";
// console.log(subTitle);
function printCourseName(name) {
    console.log("The course name is: " + name.toUpperCase());
}
// Password Toggler 
function togglePassword(fieldId) {
    var password = document.getElementById(fieldId);
    if (password.type === 'password') {
        password.type = 'text';
    }
    else {
        password.type = 'password';
    }
}
// Form Handler
function handleFormSubmission(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('Cpassword').value;
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
var form = document.getElementById('signupForm');
form.addEventListener('submit', handleFormSubmission);
