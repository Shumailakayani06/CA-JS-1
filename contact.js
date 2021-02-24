
const contactForm = document.querySelector(".contact-form");
const fName = document.getElementById("name");
const fNameError = document.querySelector("#error-fName");
const subject = document.getElementById("subject");
const subjectError = document.querySelector("#error-subject");
const email = document.getElementById("email");
const emailError = document.querySelector("#error-email")
const adress = document.getElementById("adress");
const adressError = document.querySelector("#error-adress")
const errorElement = document.getElementById("error");
const succesmessage = document.querySelector(".success-message");

contactForm.addEventListener("submit", verifyForm);

function verifyForm(e){
     

    if (fName.value.length === 0 || fName.value.length === 1) {
        e.preventDefault();
        fNameError.innerHTML="Name is required";
    }

    else if(subject.value.length < 10) {
        e.preventDefault();
        subjectError.innerHTML="Subject must contain at least 10 characters";
    }
    else if(!testEmail(email.value)){
        e.preventDefault();
        emailError.innerHTML="Please enter a valid email";
    }

    else if (adress.value.length < 25) {
        e.preventDefault();
        adressError.innerHTML="Subject must contain at least 25 characters";
    } else{
        

        succesmessage.textContent="Your form has been submitted" 
        fName.value="";
        subject.value="";
        email.value="";
        adress.value="";
        e.preventDefault();



        

    } 
}

let pattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";
    
function testEmail(str){
    if(!str.match(pattern)){

        return false;
    }
    return true;
}










// contactForm.onsubmit = function(){

//     if ( contactForm.fName.value >= 2){
//         fNameError.innerHTML = "please enter"
//         return false;
//     }
//     else {
//         fNameError.innerHTML ="";
//         return true;
//     }
// }


//  function verifyForm()

    

//     if (fName.value.length >= 2) {
//         fNameError.style.display = "none";
            
//     } else {
//         fNameError.style.display = "block";
       
//     }


//     if (subject.value.length >= 10) {
//         subjectError.style.display = "none";
            
//     } else {
//         subjectError.style.display = "block";
       
//     }

//     if (email.value.length >= 10) {
//         emailError.style.display = "none";
            
//     } else {
//         emailError.style.display = "block";
       
//     }

//     if (adress.value.length >= 25) {
//         adressError.style.display = "none";
            
//     } else {
//         adressError.style.display = "block";
       
//     }
  
//     console.log("hello");
// }

