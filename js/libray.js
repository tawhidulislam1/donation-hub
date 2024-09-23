function mainBalance() {
  const balance = document.getElementById("main-balance").innerText;
  const mainBalance = parseFloat(balance);
  return mainBalance;
}

function donatingAmount(id) {
  const donatedAmount = document.getElementById(id).innerText;
  const totalDonateAmount = parseFloat(donatedAmount);
  return totalDonateAmount;
}

function donateAmount(id) {
  const donatationAmount = document.getElementById(id).value;
  const donateAmount = parseFloat(donatationAmount);
  return donateAmount;
}

function showDivSection(id) {
  document.getElementById("donate").classList.add("hidden");
  document.getElementById("div-cashout").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
