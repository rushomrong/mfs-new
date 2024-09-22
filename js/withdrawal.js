//calling the add money button

document
  .getElementById("withdrawal-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("withdrawal-amount").value;
    const moneyOut = parseFloat(cashOut);

    const withdrawalAcc = document.getElementById("withdrawal-acc").value;
    const outPin = document.getElementById("withdrawal-pin").value;

    if (withdrawalAcc === "123456" && outPin === "1234") {
      const balance = document.getElementById("acc-balance").innerText;
      const remainBalance = parseFloat(balance);

      const totalRemain = remainBalance - moneyOut;

      document.getElementById("acc-balance").innerText = totalRemain.toFixed(0);

      window.alert(
        "Amount has been withdrawal successfully. Your ACC Balance is : $" +
          totalRemain.toFixed(0)
      );
    } else if (withdrawalAcc !== "123456") {
      window.alert("Wrong Account number entered");
    } else if (outPin !== "1234") {
      window.alert("Wrong pin entered!");
    } else {
      window.alert("Wrong details entered!");
    }
  });
