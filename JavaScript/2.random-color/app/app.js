const hexBtn = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex_color_value");
const hexColorContainer = document.querySelector(".hex-color-container");
const hexCopyBtn = document.querySelector(".hex-copy-color");

hexBtn.addEventListener("click", () => {
  let characterSet = "0123456789ABCDEF";
  let hexColorOutput = "";

  for (let i = 0, charSetLength = characterSet.length; i < 6; ++i) {
    hexColorOutput += characterSet.charAt(
      Math.floor(Math.random() * charSetLength)
    );
  }

  hexColorValue.textContent = `#${hexColorOutput}`
  hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
  hexBtn.style.color = `#${hexColorOutput}`

});

const rgbBtn = document.querySelector('.rgb-btn');
const getRedInputRange = document.querySelector('#red');
const getGreenInputRange = document.querySelector('#green');
const getBlueInputRange = document.querySelector('#blue');
const rgbColorContainer = document.querySelector(".rgb-color-container");
const rgbCopyBtn = document.querySelector(".hex-copy-color");
const rgbColorValue = document.querySelector(".rgb_color_value");


rgbBtn.addEventListener('click', () => {
  let red = getRedInputRange.value;
  let green = getGreenInputRange.value;
  let blue = getBlueInputRange.value;

  rgbColorValue.textContent = `rgb(${red}, ${green}, ${blue})`
  rgbColorContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  rgbBtn.style.color = `rgb(${red}, ${green}, ${blue})`
})

function copyHexColorToClickBoard() {
  navigator.clipboard.writeText(hexColorValue.textContent)
  alert("Copy Hex Color")
}

hexCopyBtn.addEventListener('click', copyHexColorToClickBoard)