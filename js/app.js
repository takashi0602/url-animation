"use strict";

let timeoutId, flag = "addition";
const texts = ["", "c", "cl", "cli", "clic", "click", "click!"];

const initialLoop = (arr, count = 0) => {
  location.hash = arr[count % arr.length];
  if (count === 0) {
    flag = "addition";
  } else if (count === arr.length - 1) {
    flag = "subtraction";
  }

  timeoutId = setTimeout(
    initialLoop.bind(
      this,
      arr,
      flag === "addition" ? count + 1 : count - 1
    ), 300);
};

const loop = (arr, count = 0, time = 75) => {
  location.hash = arr[count % arr.length];
  timeoutId = setTimeout(loop.bind(this, arr, count + 1, time), time);
};

const urlAnimations = () => {
  if (location.hash === "#moon") {
    const moons = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];

    clearTimeout(timeoutId);
    loop(moons, 0, 90);
  } else if (location.hash === "#clock") {
    const clocks = ["🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛"];

    clearTimeout(timeoutId);
    loop(clocks);
  } else if (location.hash === "#zodiac") {
    const zodiac = ["🐭", "🐮", "🐯", "🐰", "🐲", "🐍", "🐴", "🐏", "🐵", "🐔", "🐶", "🐗"];

    clearTimeout(timeoutId);
    loop(zodiac, 0, 300);
  }
};

initialLoop(texts);
window.addEventListener("hashchange", urlAnimations, false);
