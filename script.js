// defeined
const showErrMs = document.getElementById("err");
const Frname = document.getElementById("frName");
const lasname = document.getElementById("lasName");
const password = document.getElementById("pass");
const cPassword = document.getElementById("cpass");
const form = document.getElementById("form");
const SubmitFormUser = document.getElementById("SubmitFormUser");
const thanks = document.getElementById("thanks");

// event listener

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //storing err msg in here
  let msg = [];

  if (Frname.value === "" || Frname.value == null) {
    msg.push("First name is required");
  } else if (lasname.value === "" || lasname.value == null) {
    msg.push("Last name is required");
  } else if (
    password.value === "" ||
    password.value <= 6 ||
    password.value >= 20 ||
    password.value === "123" ||
    password.value === null
  ) {
    msg.push("password must be not less than 6 or greator than 20");
  } else if (password.value != cPassword.value) {
    msg.push("password enter above is not matching ");
  } else {
    thanks.textContent = `Thank You : ${Frname.value.toUpperCase()} ${lasname.value.toUpperCase()}`;
    showErrMs.style.paddingBottom = "16.5px";
  }
  showErrMs.textContent = msg.join(" ➡️  ");
});

// functions
// to disable copy of password
window.onload = () => {
  password.onpaste = (e) => e.preventDefault();
};
