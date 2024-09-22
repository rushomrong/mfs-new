//calling the add money button

document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const addMoney = document.getElementById("input-amount").value;
    const money = parseFloat(addMoney);

    const addAcc = document.getElementById("input-acc").value;
    // const acc = parseFloat(addAcc);

    const addPin = document.getElementById("input-pass").value;

    if (addAcc === "123456" && addPin === "1234") {
      const balance = document.getElementById("acc-balance").innerText;
      const totalBalance = parseFloat(balance);

      const newBalance = totalBalance + money;
      //   console.log(newBalance);

      // document.getElementById("acc-balance").innerText =
      //   "$" + newBalance.toFixed(0);
      document.getElementById("acc-balance").innerText = newBalance.toFixed(0);

      window.alert(
        "Amount has been added successfully. Your ACC Balance is : $" +
          newBalance.toFixed(0)
      );
    } else {
      window.alert("Your Account & pin number is wrong!");
    }
  });
