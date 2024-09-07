document.getElementById('resumeform')?.addEventListener('submit',function(event){
    event.preventDefault();


    //type assertion//input layliya
    const nameElement = document.getElementById('name')as HTMLInputElement;
    const emailElement = document.getElementById('email')as HTMLInputElement;
    const phoneElement = document.getElementById('phone')as HTMLInputElement;
    const educationElement = document.getElementById('education')as HTMLInputElement;
    const experianceElement = document.getElementById('experiance')as HTMLInputElement;
    const skillsElement = document.getElementById('skills')as HTMLInputElement;

    if(nameElement && emailElement && phoneElement && educationElement && experianceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value ;
        const phone = phoneElement.value ;
        const education = educationElement.value ;
        const experiance = experianceElement.value ;
        const skills = skillsElement.value ;
    

    //output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
     <p><strong>Email:</strong> ${email} </p>
      <p><strong>Contact:</strong> ${phone} </p>

       <h3>Education</h3>
       <p>${education} </p>

         <h3>Experiance</h3>
       <p>${experiance} </p>

         <h3>Skills</h3>
       <p>${skills} </p>
    
    `;
 const resumeOutputElement = document.getElementById('resumeOutput')
 if(resumeOutputElement){
    resumeOutputElement.innerHTML =resumeOutput
 }
 else{
    console.error('The resume element missing')
 }}else{
    console.error('more than one element are missing')
 }


})