const blockQuoteEl = document.querySelector("blockquote");

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const res = JSON.parse(xhr.responseText);

    blockQuoteEl.innerText = res.slip.advice;
  }
};

xhr.open("GET", "https://api.adviceslip.com/advice", true);
xhr.send();
