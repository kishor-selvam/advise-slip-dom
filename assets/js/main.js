const blockQuoteEl = document.querySelector("blockquote>p");
const GenerateButtonEl = document.querySelector("#generate-btn");

const API_URL = "https://api.adviceslip.com/advice";

GenerateButtonEl.style.display = "none";

GenerateButtonEl.addEventListener("click", async () => {
  const AdviceSlip = await adviceSlipApiCall();
  blockQuoteEl.textContent = AdviceSlip.slip.advice;
});

// Using XHR

// const xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const res = JSON.parse(xhr.responseText);

//     blockQuoteEl.innerText = res.slip.advice;
//   }
// };

// xhr.open("GET", API_URL, true);
// xhr.send();

// Using Await Async

const adviceSlipApiCall = async () => {
  try {
    const res = await fetch(API_URL);
    const jsonData = await res.json();
    return jsonData;
  } catch (err) {
    console.log(err);
  }
};

const AdviceSlip = await adviceSlipApiCall();
blockQuoteEl.textContent = AdviceSlip.slip.advice;

GenerateButtonEl.style.display = "inline-flex";
