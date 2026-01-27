const amountInput = document.getElementById("amount");
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
    case "JPY":
      fromRateToEUR = 0.0067;
      break;
    case "AUD":
      fromRateToEUR = 0.62;
      break;
    case "CAD":
      fromRateToEUR = 0.68;
      break;
    case "CHF":
      fromRateToEUR = 1.08;
      break;
    case "PLN":
      fromRateToEUR = 0.22;
      break;
    case "TRY":
      fromRateToEUR = 0.05;
      break;
    case "CNY":
      fromRateToEUR = 0.13;
      break;
    case "CZK":
      fromRateToEUR = 0.04;
      break;
    case "SEK":
      fromRateToEUR = 0.09;
      break;
    case "RUB":
      fromRateToEUR = 0.01;
      break;
    case "INR":
      fromRateToEUR = 0.011;
      break;
    case "BRL":
      fromRateToEUR = 0.18;
      break;
    case "ZAR":
      fromRateToEUR = 0.055;
      break;
    case "MXN":
      fromRateToEUR = 0.049;
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
    case "JPY":
      toRateFromEUR = 149.25;
      break;
    case "AUD":
      toRateFromEUR = 1.61;
      break;
    case "CAD":
      toRateFromEUR = 1.47;
      break;
    case "CHF":
      toRateFromEUR = 0.93;
      break;
    case "PLN":
      toRateFromEUR = 4.5;
      break;
    case "TRY":
      toRateFromEUR = 19.0;
      break;
    case "CNY":
      toRateFromEUR = 7.6;
      break;
    case "CZK":
      toRateFromEUR = 24.5;
      break;
    case "SEK":
      toRateFromEUR = 10.5;
      break;
    case "RUB":
      toRateFromEUR = 90.0;
      break;
    case "INR":
      toRateFromEUR = 82.0;
      break;
    case "BRL":
      toRateFromEUR = 5.5;
      break;
    case "ZAR":
      toRateFromEUR = 18.0;
      break;
    case "MXN":
      toRateFromEUR = 20.5;
      break;
    default:
      toRateFromEUR = 1;
  }

  if (isNaN(amount)) {
    resultDisplay.textContent = "Įveskite teisingą sumą.";
    return;
  }

  // Kol nepadariau pakeitimo teisinga svertimas vyko tik tarp euro svaro ir dolerio
  const toRateToEUR = 1 / toRateFromEUR;

  const convertedAmount = amount * (fromRateToEUR / toRateToEUR);

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
