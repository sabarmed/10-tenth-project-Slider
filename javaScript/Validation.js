const registerButton = document.getElementById("regbtn");
const activeRegister = () => {
  if (
    userName.classList.contains("success") &&
    Email.classList.contains("success") &&
    password.classList.contains("success") &&
    passwordRepeat.classList.contains("success")
  ) {
    registerButton.removeAttribute("disabled");
  } else {
    registerButton.setAttribute("disabled", "disabled");
  }
};

const userName = document.getElementById("Username");
const userMessage = document.getElementById("usermessage");

userName.addEventListener("keyup", (eo) => {
  userName.classList.add("error");
  userMessage.style.display = "block";

  if (userName.value.length > 2) {
    userName.classList.add("success");
    userMessage.style.display = "none";
    userName.nextElementSibling.style.opacity = "1";
  } else {
    userName.nextElementSibling.style.opacity = "0";
    userName.classList.remove("success");
    userMessage.style.display = "block";
  }
  activeRegister();
});

const Email = document.getElementById("email");
const emailMessag = document.getElementById("emailmessage");

Email.addEventListener("keyup", (eo) => {
  Email.classList.add("error");
  emailMessag.style.display = "block";
  const rgbEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (rgbEmail.test(Email.value)) {
    Email.classList.add("success");
    Email.nextElementSibling.style.opacity = "1";
    emailMessag.style.display = "none";
  } else {
    Email.classList.remove("success");
    Email.nextElementSibling.style.opacity = "0";
    emailMessag.style.display = "block";
  }
  activeRegister();
});

const password = document.getElementById("psw");
const paswordMessage = document.getElementById("passwordmessage");

password.addEventListener("keyup", (eo) => {
  password.classList.add("error");
  paswordMessage.style.display = "block";
  const rgbPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (rgbPassword.test(password.value)) {
    password.classList.add("success");
    password.nextElementSibling.style.opacity = "1";
    paswordMessage.style.display = "none";
  } else {
    password.classList.remove("success");
    password.nextElementSibling.style.opacity = "0";
    paswordMessage.style.display = "block";
  }
  activeRegister();
});

const passwordRepeat = document.getElementById("pswrepeat");
const pswRepeatMessage = document.getElementById("pswrepeat");

passwordRepeat.addEventListener("keyup", (eo) => {
  passwordRepeat.classList.add("error");
  pswRepeatMessage.style.display = "block";

  if (passwordRepeat.value === password.value) {
    passwordRepeat.classList.add("success");
    passwordRepeat.nextElementSibling.style.opacity = "1";
    pswRepeatMessage.style.display = "none";
  } else {
    passwordRepeat.classList.remove("success");
    passwordRepeat.nextElementSibling.style.opacity = "0";
    pswRepeatMessage.style.display = "block";
  }
  activeRegister();
});

const creatAccount = document.getElementById("creatccount")
const parentForm = document.getElementById("parentform")
const myForm = document.getElementById("myform")

creatAccount.addEventListener("click", (eo) => {
    parentForm.style.display = "flex"
    setTimeout(() => {
        myForm.style.transform = "scale(1)"
    }, 100);
})
const closeForm = document.getElementById("close")

closeForm.addEventListener("click", (eo) => {
    myForm.style.transform = "scale(0)"
    setTimeout(() => {
        parentForm.style.display = "none"
    }, 400);
   
})
