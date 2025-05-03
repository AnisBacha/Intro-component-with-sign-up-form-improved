const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

const button  = document.getElementById("button");

button.addEventListener("click" , (event) => {
    event.preventDefault();
    firstName.value === "" ? display(".main__firstName-error", 'block') : display(".main__firstName-error", 'none');
    lastName.value === "" ? display(".main__lastName-error", 'block') : display(".main__lastName-error", 'none');

    const emailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    !emailFormat.test(email.value) ? display(".main__email-error", 'block') : display(".main__email-error", 'none') ;

    password.value === "" ? display(".main__password-error", 'block') : display(".main__password-error", 'none');
});



const display = (className, displayType) =>{
    const elements = document.querySelectorAll(className);
    elements.forEach(element => {
        element.style.display = `${displayType}`;
    });
};
9
