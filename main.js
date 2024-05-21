let signIn = document.querySelector(".signIn");
let login = document.querySelector(".login");

let signIn_name = document.querySelector(".signIn_name");
let signIn_surname = document.querySelector(".signIn_surname");
let signIn_mail = document.querySelector(".signIn_mail");
let signIn_password = document.querySelector(".signIn_password");

let login_mail = document.querySelector(".login_mail");
let login_password = document.querySelector(".login_password");

function login_signIn() {
  try {
    signIn.addEventListener("submit", (e) => {
      e.preventDefault();
      localStorage.setItem("mail", signIn_mail.value);
      localStorage.setItem("password", signIn_password.value);
      localStorage.setItem("name", signIn_name.value);
      localStorage.setItem("surname", signIn_surname.value);
    });
  } catch (error) {}

  try {
    login.addEventListener("submit", (e) => {
      let local_mail = localStorage.getItem("mail");
      let local_password = localStorage.getItem("password");
      e.preventDefault();
      if (
        local_mail === login_mail.value &&
        local_password === login_password.value
      ) {
        console.log(true);
      } else {
        console.log(false);
      }
    });
  } catch (error) {}
}
login_signIn();
