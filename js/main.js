elForm = document.querySelector(".form");
elInput = document.querySelector(".money");
elSelect = document.querySelector(".currency");
elTitle = document.querySelector(".title");
elResult = document.querySelector(".result");

var Rubl = 184.46;
var Usd = 11252;
var Euro = 11686;

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  var elInputValue = +elInput.value;
  var elSelectValue = +elSelect.value;
  var MoneyGramm1 = elInputValue * Rubl;
  var MoneyGramm2 = elInputValue * Usd;
  var MoneyGramm3 = elInputValue * Euro;

    // RUBL

    if (elSelect.value == 1) {
      elTitle.textContent = "1 rubl = 184.46 so'm";
      elResult.textContent = MoneyGramm1.toFixed(2) + " ₽";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Son va Valyuta kiriting!!!";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "Valyuta kiriting!!!";
    }

    // RUBL

    // USD

    if (elSelect.value == 2) {
      elTitle.textContent = "1 $ = 11252 so'm";
      elResult.textContent = MoneyGramm2.toFixed(2) + " $";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Son va Valyuta kiriting!!!";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "Valyuta kiriting!!!";
    }

    // USD

    // EURO

    if (elSelect.value == 3) {
      elTitle.textContent = "1 Euro = 11686 so'm";
      elResult.textContent = MoneyGramm3.toFixed(2) + " €";
    } else if (elSelectValue == 0 && elInputValue == " ") {
      elTitle.textContent = "Son va Valyuta kiriting!!!";
    } else if (elSelectValue == 0) {
      elTitle.textContent = "Valyuta kiriting!!!";
    }


  // EURO
});
