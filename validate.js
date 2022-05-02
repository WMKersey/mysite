// Set variables for required fields and form

const form = document.getElementById("my-form");
const firstName = document.getElementById("first-name");
const emailAddress = document.getElementById("email");
const message = document.getElementById("message");

// Once the submit button is clicked the following will occur
form.addEventListener("submit", (e) => {

    e.preventDefault();

    checkValues();

    if((firstName.value !== "") && (emailAddress.value !== "") && (message.value !== "")) {
        form.submit();
        console.log("Form Submitted!");
        alert("Form Submitted!");
    } 
   
});

// Code Challenge #1: Leverage inline validation so that the user
// does not have to click the submit button in order to receive feedback.
// Hint: Consider the event type

function checkValues() {
    let firstNameValue = firstName.value;
    let emailValue = emailAddress.value;
    let messageValue = message.value;

    let fNameError = document.querySelector(".fname-error");
    let emailError = document.querySelector(".email-error");
    let messageError = document.querySelector(".message-error");

    // Insert your code here


    // If the value of the firstname field is empty, the field's background
    // color should change and the error message should display:
    // Property hints: style, innerText



    // If the value of the firstname field is not empty, the field's background
    // color should return to white and the error message should return
    // to empty.

    // First name logic
    if(firstNameValue == "") {
        console.log("There is nothing here -->" + firstNameValue);
        firstName.style.backgroundColor = "yellow";
        fNameError.innerText = "I gotta to know your first name!";
    } else if((firstNameValue !== "") && (fNameError.innerText !== "")) {
        console.log("This is the first name --> " + firstNameValue);
        firstName.style.backgroundColor = "white";
        fNameError.innerText = "";
    }

    // Email Logic
    if(emailValue == "") {
        emailAddress.style.backgroundColor = "yellow";
        emailError.innerText = "I can't respond without your email!";
    } else if((emailValue !== "") && (emailError.innerText !== "")) {
        emailAddress.style.backgroundColor = "white";
        emailError.innerText = "";
    }

    // Code Challenge #2: use the pattern attribute to ensure that the 
    // user inputs a valid email address.

    // Message Logic
    if(messageValue == "") {
        message.style.backgroundColor = "yellow";
        messageError.innerText = "Wait! Aren't you wanting to ask me something?";
    } else if((messageValue !== "") && (messageError.innerText !== "")) {
        message.style.backgroundColor = "white";
        messageError.innerText = "";
    }


    /* Patterns 

    Date Regular Expression: pattern="\d{1,2}/\d{1,2}/\d{4}"
    Email Regular Expression: pattern="^.+@.+$"
    URL Regular Expression: pattern="https?://.+"
    
    */
}