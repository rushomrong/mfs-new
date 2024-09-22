// show the cash out form
document
  .getElementById("withdrawal-funds")
  .addEventListener("click", function () {
    // console.log('show withdrawal button clicked')
    document.getElementById("withdrawal-content").classList.remove("hidden");

    // hide the add money form
    document.getElementById("addFunds-content").classList.add("hidden");
  });

// show add money form and hide the cash out form
document.getElementById("add-funds").addEventListener("click", function () {
  document.getElementById("addFunds-content").classList.remove("hidden");

  document.getElementById("withdrawal-content").classList.add("hidden");
});
