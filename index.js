// Your code here
const dodger = document.getElementById("dodger");
dodger.style.bottom = "100px";
dodger.style.backgroundColor = "#FF69B4";


document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});


function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    dodger.style.left = `${left - 1}px`;
}

function moveDodgerRight() {
  // const rightNumbers = dodger.style.right.replace("px", "");
  //   const right = parseInt(rightNumbers, 10);

  //   dodger.style.right = `${right + 1}px`;

  const dodger = document.getElementById('dodger');
  const currentLeft = parseInt(dodger.style.left) || 0;
  const newLeft = currentLeft + 1;

  dodger.style.left = `${newLeft}px`;
}