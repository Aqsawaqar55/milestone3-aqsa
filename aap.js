var _a;
(_a = document.getElementById('resumeform')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    //type assertion//input layliya
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experianceElement = document.getElementById('experiance');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experiance = experianceElement.value;
        var skills = skillsElement.value;
        //output
        var resumeOutput = "\n    <h2>Resume</>\n    <p><strong>Name:</strong> ".concat(name_1, " </p>\n     <p><strong>Email:</strong> ").concat(email, " </p>\n      <p><strong>Contact:</strong> ").concat(phone, " </p>\n\n       <h3>Education</h3>\n       <p>").concat(education, " </p>\n\n         <h3>Experiance</h3>\n       <p>").concat(experiance, " </p>\n\n         <h3>Skills</h3>\n       <p>").concat(skills, " </p>\n    \n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume element missing');
        }
    }
    else {
        console.error('more than one element are missing');
    }
});
