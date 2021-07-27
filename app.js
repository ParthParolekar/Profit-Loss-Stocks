const userInput = document.querySelectorAll(".input");
const form = document.querySelector(".form");
const result = document.querySelector(".result");
const calculateBtn = document.querySelector("#calculate-btn");
let showGIF = document.querySelector(".gif-container");

form.addEventListener("submit", calculate);

function calculate(e) {
  e.preventDefault();

  showGIF.innerHTML = "";

  let costPrice = userInput[0].value;
  let qty = userInput[1].value;
  let sellingPrice = userInput[2].value;

  costPrice = Number(costPrice);
  qty = Number(qty);
  sellingPrice = Number(sellingPrice);

  if (costPrice > 0 || qty > 0 || sellingPrice > 0) {
    //for profit
    if (sellingPrice > costPrice) {
      let profitPerShare = sellingPrice - costPrice;
      let profit = profitPerShare * qty;
      let profitInPercent = (profitPerShare * 100) / costPrice;

      result.innerText = `Congrats! You made a profit of ${profit}Rs(${profitInPercent.toFixed(
        2
      )}%)`;

      if (profitInPercent >= 50) {
        showGIF.innerHTML =
          '<img src="https://media.tenor.com/images/46db66113e0bf94ff7b93bfda73574e5/tenor.gif" alt="" />';
      }
    } else if (costPrice > sellingPrice) {
      let lossPerShare = costPrice - sellingPrice;
      let loss = lossPerShare * qty;
      let lossInPercent = (lossPerShare * 100) / costPrice;

      result.innerText = `You made a loss of ${loss}Rs(${lossInPercent.toFixed(
        2
      )}%). Hard Luck:(`;

      if (lossInPercent >= 50) {
        showGIF.innerHTML =
          '<img src="https://i.redd.it/d6wqu7h9yvv21.gif" alt="" />';
      }
    } else {
      result.innerText = `Seems like you did not make any profit or loss`;
    }
  } else {
    alert("Please enter the amount above 0");
  }
}
