let input = document.querySelector(".input");
let output = document.querySelector(".output");
let equal = document.querySelector(".btn-equal");
let clear = document.querySelector(".clear");
let backspace = document.querySelector(".backspace");
let keys = document.querySelectorAll(".key");
let historyList = document.querySelector(".history-list");

let history = [];

keys.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.dataset.num;
    if (value) {
      if (
        input.textContent === "" &&
        (value === "+" || value === "-" || value === "*" || value === "/")
      ) {
        return;
      }
      if (input.textContent === "0" && value != ".") {
        input.textContent = value;
      } else {
        input.textContent += value;
      }
    }
  });
});

equal.addEventListener("click", function () {
  if (input.textContent !== "") {
    try {
      let result = eval(input.textContent);
      output.textContent = result;

      saveCalculation(input.textContent, result);
    } catch (error) {
      output.textContent = "Error";
    }
  }
});

clear.addEventListener("click", function () {
  input.textContent = "";
  output.textContent = 0;
});

backspace.addEventListener("click", function () {
  input.textContent = input.textContent.slice(0, -1);
  if (input.textContent === "") {
    input.textContent = "";
  }
});

function saveCalculation(expression, result) {
  let historyItem = `${expression} = ${result}`;
  history.push(historyItem);

  updateHistoryDisplay();
}

function updateHistoryDisplay() {
  historyList.innerHTML = "";
  history.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

/* animasi container history */
const historyBtn = document.querySelector(".history-btn");
const container = document.querySelector(".container");

historyBtn.addEventListener("click", () => {
  container.classList.toggle("history-active");
});
