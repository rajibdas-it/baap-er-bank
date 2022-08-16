document.getElementById("btn-login").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const userPasswrod = document.getElementById("user-password");
  const email = userEmail.value;
  const password = userPasswrod.value;
  if (email === "rajibrad@gmail.com" && password === "1234") {
    document.location.href = "dashboard.html";
  } else {
    alert("User Email or Password is incorrect. Go to hell");
  }
});
