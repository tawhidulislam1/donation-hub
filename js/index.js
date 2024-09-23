// noakhali Donation Code
document
  .getElementById("noakhali-donate")
  .addEventListener("click", function () {
    const donatedAmount = donateAmount("noakhali-filed");
    const totalDonatedAmount = mainBalance();
    const totalNoakhaliDonatedAmount = donatingAmount("donating-amount");

    if (isNaN(donatedAmount) || donatedAmount <= 0) {
      alert("Invailded Amount");
      document.getElementById("modal").close();
      document.getElementById("noakhali-filed").value = "";
      return;
    }

    if (donatedAmount >= totalDonatedAmount) {
      alert("You have not the money");
      document.getElementById("modal").close();
      document.getElementById("noakhali-filed").value = "";
      return;
    }

    const newTotalBalance = (totalDonatedAmount - donatedAmount).toFixed(2);
    const newTotalnNoakhaliBalance = (
      donatedAmount + totalNoakhaliDonatedAmount
    ).toFixed(2);

    document.getElementById("donating-amount").innerText =
      newTotalnNoakhaliBalance;
    document.getElementById("main-balance").innerText = newTotalBalance;

    const noakhaliTitle = document.getElementById(
      "feni-noakhali-title"
    ).innerText;
    const time = new Date();
    // transaction history start
    const div = document.createElement("div");
    div.classList.add("card-body");
    div.innerHTML = `
        <h2 class="card-title">${donatedAmount}Taka is ${noakhaliTitle} </h2>
        <p>${time}</p>
    `;
    document.getElementById("histoy").appendChild(div);

    document.getElementById("noakhali-filed").value = "";
    document.getElementById("modal").showModal();
  });

// Feni Donation Code

document.getElementById("feni-donate").addEventListener("click", function () {
  const feniDonatedAmount = donateAmount("feni-filed");
  const totalDonatedAmountFeni = mainBalance();
  const totalFeniDonatedAmount = donatingAmount("donating-amount-feni");

  if (isNaN(feniDonatedAmount) || feniDonatedAmount <= 0) {
    alert("Invailded Amount");
    document.getElementById("modal").close();
    document.getElementById("feni-filed").value = "";
    return;
  }
  const newTotalBalance = totalDonatedAmountFeni - feniDonatedAmount;
  if (feniDonatedAmount >= totalDonatedAmountFeni) {
    document.getElementById("modal").close();
    document.getElementById("feni-filed").value = "";
    alert("You have not the money");
    return;
  }
  const newTotalnFeniBalance = feniDonatedAmount + totalFeniDonatedAmount;

  document.getElementById("donating-amount-feni").innerText =
    newTotalnFeniBalance;
  document.getElementById("main-balance").innerText = newTotalBalance;

  const feniTitle = document.getElementById("feni-title").innerText;
  const time = new Date();
  // transaction history start
  const div = document.createElement("div");
  div.classList.add("card-body");
  div.innerHTML = `
        <h2 class="card-title">${feniDonatedAmount}Taka is ${feniTitle} </h2>
        <p>${time}</p>
    `;
  document.getElementById("histoy").appendChild(div);
  document.getElementById("feni-filed").value = "";

  document.getElementById("modal").showModal();
});

// qouta Donation Code

document.getElementById("qouta-donate").addEventListener("click", function () {
  const qoutaDonatedAmount = donateAmount("qouta-filed");
  const totalDonatedAmountQouta = mainBalance();
  const totalQoutaDonatedAmount = donatingAmount("donating-amount-qouta");

  if (isNaN(qoutaDonatedAmount) || qoutaDonatedAmount <= 0) {
    alert("Invailded Amount");
    document.getElementById("modal").close();
    document.getElementById("qouta-filed").value = "";
    return;
  }
  const newTotalBalance = totalDonatedAmountQouta - qoutaDonatedAmount;
  if (qoutaDonatedAmount >= totalDonatedAmountQouta) {
    alert("You have not the money");
    document.getElementById("modal").close();
    document.getElementById("qouta-filed").value = "";
    return;
  }
  const newTotalnQoutaBalance = qoutaDonatedAmount + totalQoutaDonatedAmount;

  document.getElementById("donating-amount-qouta").innerText =
    newTotalnQoutaBalance;
  document.getElementById("main-balance").innerText = newTotalBalance;

  const qoutaTitle = document.getElementById("qouta-title").innerText;
  const time = new Date();
  // transaction history start
  const div = document.createElement("div");
  div.classList.add("card-body");
  div.innerHTML = `
        <h2 class="card-title">${qoutaDonatedAmount}Taka is Donate For ${qoutaTitle} </h2>
        <p>${time}</p>
    `;
  document.getElementById("histoy").appendChild(div);

  document.getElementById("qouta-filed").value = "";

  document.getElementById("modal").showModal();
});

// donate section show
document.getElementById("donated").addEventListener("click", function () {
  showDivSection("donate");
  const btn = document.getElementById("donated");
  btn.classList.add("actives");
  const btnDonated = document.getElementById("history");
  btnDonated.classList.remove("actives");
});

// history section show
document.getElementById("history").addEventListener("click", function () {
  showDivSection("history-section");
  const btnDonated = document.getElementById("donated");
  btnDonated.classList.remove("actives");
  const btn = document.getElementById("history");
  btn.classList.add("actives");
});
