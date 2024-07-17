// check width or height which is greater and assign border radius accordingly-----------------------------------

let height = window.innerHeight;
let width = window.innerWidth;
if (width < height) { var finalwidth = height }
else{ var finalwidth = width }
console.log(finalwidth);

// on/off of button ------------------------

let box = document.querySelector(".box");
let btn = document.querySelector("#switch");


btn.addEventListener("click", function () {
  if (btn.innerText == "ON") {
    box.style.transitionDuration = '.5s';
    box.style.backgroundColor = "yellow";
    box.style.color = "red";
    btn.style.color = "red";
    box.style.transform = "rotate(0deg)";
    box.style.border = "5px solid orangered";
    btn.innerHTML = ("OFF");

  } else {
    box.style.transitionDuration = '.5s';
    box.style.backgroundColor = "white";
    box.style.color = "black";
    btn.style.color = "green";
    box.style.transform = "rotate(360deg)";
    btn.innerHTML = ("ON");
    box.style.border = `${finalwidth}vh solid white`;
  }
})

box.addEventListener("click", function () {
  box.style.border = "5px solid red";
})

// effect -------------------------------------

effectBtn = document.querySelector("#effect");

effectBtn.addEventListener("click", function () {

  box.style.transitionDuration = '.0500s';
  box.style.backgroundColor = "white";
  box.style.color = "black";
  box.style.transform = "rotate(360deg)";
  box.style.border = `${finalwidth}vh solid white`;

  setTimeout(function () {
    box.style.backgroundColor = "yellow";
    box.style.color = "red";
    box.style.transform = "rotate(0deg)";
    box.style.border = "5px solid orangered";
  }, 50);
})

