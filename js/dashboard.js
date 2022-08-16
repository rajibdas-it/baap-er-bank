document.getElementById("btn-deposit").addEventListener("click", function () {
  const currentDepositAmt = document.getElementById("current-deposit");
  const currnetAmountStirng = currentDepositAmt.innerText;
  const currentAmount = parseFloat(currnetAmountStirng);

  const newDeposit = document.getElementById("deposit-field");
  const newDepositString = newDeposit.value;
  const newDepositAmount = parseFloat(newDepositString);
  const totalDepositAmount = currentAmount + newDepositAmount;
  currentDepositAmt.innerText = totalDepositAmount;
  newDeposit.value = "";
  const existingTotalAmount = document.getElementById("current-amount");
  const totalAmountString = existingTotalAmount.innerText;
  const currentTotalAmount = parseFloat(totalAmountString);
  const totalAmount = currentTotalAmount + newDepositAmount;
  existingTotalAmount.innerText = totalAmount;
});
