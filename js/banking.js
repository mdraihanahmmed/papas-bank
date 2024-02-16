const keepButton = document
  .getElementById("keep-button")
  .addEventListener("click", () => {
    // geting user amount
    const depositAmountInputTag = document.getElementById("deposit-amount");
    const depositAmountText = depositAmountInputTag.value;
    const depositAmount = parseFloat(depositAmountText);

    // getting deposit amount
    const depositAmountShowTag = document.getElementById("deposit-amount-show");
    const depositNewAmountText = depositAmountShowTag.innerText;
    const depositNewAmount = parseFloat(depositNewAmountText);

    if (depositAmount > 0) {
      const depositTotal = depositAmount + depositNewAmount;
      depositAmountShowTag.innerText = depositTotal;
    }

    // total balance field update for deposit
    const totalBalanceTag = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceTag.innerText;
    const totalBalance = parseFloat(totalBalanceText);

    const totalBalanceAmount = depositAmount + totalBalance;

    if (depositAmount > 0) {
      totalBalanceTag.innerText = totalBalanceAmount;
    } else {
      alert("please enter a valid amount!");
    }

    // clean the field
    depositAmountInputTag.value = "";
  });

const getButton = document
  .getElementById("get-button")
  .addEventListener("click", () => {
    const withdrawAmountTag = document.getElementById("withdraw-amount");
    const withdrawAmountText = withdrawAmountTag.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawTotalTag = document.getElementById("total-withdraw");
    const withdrawTotalText = withdrawTotalTag.innerText;
    const withdrawTotal = parseFloat(withdrawTotalText);

    const totalBalanceTag = document.getElementById("total-balance");
    const totalBalanceText = totalBalanceTag.innerText;
    const totalBalance = parseFloat(totalBalanceText);

    if (withdrawAmount > 0 && withdrawAmount < totalBalance) {
      const totalWithdraw = withdrawTotal + withdrawAmount;

      withdrawTotalTag.innerText = totalWithdraw;
    } else {
      alert("please enter valid amount");
    }

    withdrawAmountTag.value = "";

    if (withdrawAmount > 0 && withdrawAmount < totalBalance) {
      const balance = totalBalance - withdrawAmount;

      totalBalanceTag.innerText = balance;
    }
  });
