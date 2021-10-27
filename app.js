// import "./translator"
// import translateToMorse from "./translator";
// DOM interactions
const startBtn = document.querySelector(".onload__Welcome-btn");
const submitBtn = document.querySelector(".engToMorse");
const morseCodeDiv = document.querySelector(".morseCode");

submitBtn.addEventListener("click", () => {
  const valueOfInput = document.querySelector(".inputEng").value;
  morseCodeDiv.innerHTML = translateToMorse(valueOfInput)
})
