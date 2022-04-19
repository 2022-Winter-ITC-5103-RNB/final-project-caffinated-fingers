let form = document.querySelector("#formUp");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let email = document.querySelector(".e-mail");
let portfolio = document.querySelector(".port");
let position = document.querySelector(".pos");
let salary = document.querySelector(".sal");
let sDate = document.querySelector(".sDate");
let phone = document.querySelector(".phone");
let lastComp = document.querySelector(".prevComp");
const submit = document.querySelector("#login");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // trim to remove the whitespaces

  const fnameValue = fName.value.trim();
  const lnameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const portfolioValue = portfolio.value.trim();
  const positionValue = position.value.trim();
  const salaryValue = salary.value.trim();
  const sDateValue = sDate.value.trim();
  const phoneValue = phone.value.trim();

  if (fnameValue === "") {
    fName.style.borderColor = "red";
    fName.placeholder = "First Name is Required";
  }

  if (lnameValue === "") {
    lName.style.borderColor = "red";
    lName.placeholder = "Last Name is Required";
  }
  if (emailValue === "") {
    email.style.borderColor = "red ";
    email.placeholder = "Email is Required";
  } else if (!isEmail(emailValue)) {
    email.placeholder = "Email not valid";
    email.style.borderColor = "red ";
  }

  if (portfolioValue === "") {
    portfolio.style.borderColor = "red";
    portfolio.placeholder = "Portfolio is Required";
  }

  if (positionValue === "") {
    position.style.borderColor = "red";
    position.placeholder = "Position is required";
  }
  if (salaryValue === "") {
    salary.style.borderColor = "red";
    salary.placeholder = "Salary Expectations is required";
  }
  if (sDateValue === "") {
    sDate.style.borderColor = "red";
  }

  if (phoneValue === "") {
    phone.style.borderColor = "red";
    phone.placeholder = "Phone Number is Required";
  } else if (!isPhonenumber(phoneValue)) {
    phone.placeholder = "Enter valid Phone Number";
    phone.style.borderColor = "red";
  }
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function isPhonenumber(phonenumber) {
  let isphone =
    /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
      phonenumber
    );
  return isphone;
}