const amountInput = document.getElementById("amount");
const currencyInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertButton = document.getElementById("convertBtn");
const resultDisplay = document.getElementById("result");
const returnButton = document.getElementById("returnBtn");
const contextDisplay = document.getElementById("context");

convertButton.addEventListener("click", () => {
  //   const amount = parseFloat(amountInput.value);
  const amount = Number(amountInput.value);
  let fromRateToEUR;
  let toRateFromEUR;

  switch (fromCurrency.value) {
    case "USD":
      fromRateToEUR = 0.91;
      break;
    case "EUR":
      fromRateToEUR = 1;
      break;
    case "GBP":
      fromRateToEUR = 1.25;
      break;
    default:
      fromRateToEUR = 1;
  }

  switch (toCurrency.value) {
    case "USD":
      toRateFromEUR = 1.1;
      break;
    case "EUR":
      toRateFromEUR = 1;
      break;
    case "GBP":
      toRateFromEUR = 0.8;
      break;
    default:
      toRateFromEUR = 1;
  }

  if (isNaN(amount)) {
    resultDisplay.textContent = "Įveskite teisingą sumą.";
    return;
  }

  const convertedAmount = amount * fromRateToEUR * toRateFromEUR;

  resultDisplay.textContent = `${amount} ${
    fromCurrency.value
  } yra ${convertedAmount.toFixed(2)} ${toCurrency.value}`;
  contextDisplay.textContent = `Santykis  ${fromRateToEUR} ${fromCurrency.value}  = ${toRateFromEUR} ${toCurrency.value}`;
  //   console.log(
  //     `${amount}: ${fromCurrency.value}  ${convertedAmount.toFixed(2)} ${
  //       toCurrency.value
  //     }`
  //   );
});
returnButton.addEventListener("click", () => {
  amountInput.value = "";
  fromCurrency.value = "EUR";
  toCurrency.value = "EUR";
  resultDisplay.textContent = "";
});
