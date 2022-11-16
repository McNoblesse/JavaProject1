// Object to store details
let userDetailsDatabase = {};

function getUserDetails() {
  // Username
  let userName = prompt("Enter your username");

  function validateUserName(userName) {
    if (userName.length < 10 && userName.length > 0) {
      return true;
    } else {
      return fasle;
    }
  }
  // console.log(validateUserName(userName))

  while (validateUserName(userName) == false) {
    userName = prompt("Username should not be more than 10");
  }

  userDetailsDatabase["Username"] = userName;

  // Email
  let email = prompt("Enter your email address");

  if (email == null) {
    return;
  }

  function validateEmail(email) {
    const emailCheck =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    emailCheckResult = emailCheck.test(email);

    if (emailCheckResult == true) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(validateEmail(email))

  while (validateEmail(email) == false) {
    email = prompt("Enter a valid email");
  }

  userDetailsDatabase["Email"] = email;

  // Phone Number

  let phoneNumber = prompt("Enter your phone number");

  if (phoneNumber == null) {
    return;
  }

  function validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length == 11) {
      return true;
    } else {
      return false;
    }
  }
  // console.log(validatePhoneNumber(phoneNumber));

  while (validatePhoneNumber(phoneNumber) == false) {
    phoneNumber = prompt("Phone number must be 11 digits, Please try again");
  }

  userDetailsDatabase["PhoneNumber"] = phoneNumber;

  // Password

  let password = prompt("Enter your password");

  if (password == null) {
    return;
  }

  function validatePassword(password) {
    if (password.length < 6) {
      return false;
    } else {
      return true;
    }
  }
  // console.log(validatePassword(password));

  while (validatePassword(password) == false) {
    password = prompt("Password format is incorrect");
  }

  userDetailsDatabase["Password"] = password;

  // Confirm Password

  let confirmPassword = prompt("Confirm password");

  if (confirmPassword == null) {
    return;
  }

  function validateConfirmPassword(confirmPassword) {
    if (confirmPassword != password) {
      return false;
    } else {
      return true;
    }
  }
  // console.log(validateConfirmPassword(confirmPassword));

  while (validateConfirmPassword(confirmPassword) == false) {
    confirmPassword = prompt("Password does not match previous");
  }

  console.log(userDetailsDatabase);
}

function displayUserDetails() {
  alert(
    `Your Details\n\nUsername: ${userDetailsDatabase.Username}\nEmail: ${userDetailsDatabase.Email}\nPhone Number: ${userDetailsDatabase.PhoneNumber}\nPassword: ${userDetailsDatabase.Password}`
  );
}
