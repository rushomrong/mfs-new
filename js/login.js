document.getElementById("loginBtn").addEventListener("click", function (event) {
  //form auto loading off
  event.preventDefault();

  //getting the email id
  const email = document.getElementById("userEmail").value;
  const password = document.getElementById("userPass").value;

  console.log("email and password received");

  if (email === "admin@moneycare.com" && password === "1234") {
    let url = "/home.html";
    url = url.substring(0, url.indexOf("."));
    window.location.href = url;
  } else {
    window.alert("Error login details, please try again!");
  }
});
