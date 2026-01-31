const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container");
const video = document.querySelector(".gif-result");
const loader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// move NO button
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 60;
  const y = Math.random() * 20;
  noBtn.style.left = x + "%";
  noBtn.style.top = y + "px";
});

// YES click
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  loader.style.display = "block";

  setTimeout(() => {
    loader.style.display = "none";
    resultContainer.style.display = "block";
  }, 2000);
});