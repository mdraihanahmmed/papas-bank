const loginBtnTag = document
  .getElementById("login-button")
  .addEventListener("click", () => {
    const userEmailTag = document.getElementById("user-email");
    const userEmail = userEmailTag.value;

    const userPasswordTag = document.getElementById("user-password");
    const userPassword = userPasswordTag.value;
    console.log(userPassword);

    if (userEmail == "papasgirl@gmail.com" && userPassword == "papaspari") {
      window.location.href = "banking.html";
    }
  });
