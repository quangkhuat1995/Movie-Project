const showPoint = document.querySelector(".point");
const point = document.getElementById("inputPoint");
const bar = document.querySelector(".bar");
const btn = document.querySelector(".btn");

point.addEventListener("keyup", changePoint);

function changePoint(e) {
  // let input = e.target.value;
  let input = parseFloat(e.target.value);
  // let input = parseFloat(point.value);
  showPoint.innerHTML = input;
  let clipPath = "";
  /** 5 điểm */
  if (input >= 0 && input <= 1.25) {
    clipPath = `polygon( 50% 0, 100% 0,${40 * input + 50}% 0, 50% 50%)`;
  }
  /** 6 điểm */
  if (input > 1.25 && input <= 3.75) {
    clipPath = `polygon(50% 0, 100% 0, 100% 50%, 100% 100%, 100% ${
      40 * input - 50
    }%, 50% 50%)`;
  }

  if (input > 3.75 && input <= 6.25) {
    clipPath = `polygon(50% 0, 100% 0, 100% 50%, 100% 100%, ${
      -40 * input + 250
    }% 100%, 50% 50%)`;
  }

  /** 7 điểm */
  if (input > 6.25 && input <= 8.75) {
    clipPath = `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, 0 ${
      -40 * input + 350
    }%, 50% 50%`;
  }

  if (input > 8.75 && input <= 10) {
    clipPath = `polygon(50% 0%, 100% 0, 100% 100%, 0 100%, 0 0, ${
      40 * input - 350
    }% 0, 50% 50%`;
  }

  bar.style.webkitClipPath = clipPath;
  bar.style.mozClipPath = clipPath;
  bar.style.msClipPath = clipPath;
  bar.style.oClipPath = clipPath;
  bar.style.clipPath = clipPath;
}
