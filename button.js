const myFunction = () => {
  document.querySelector("header").style.height = "140px";
  document.querySelector("#dropdown").style.display = "flex";
  document.querySelector("#dropdown").style.flexDirection = "column";
  document.querySelector("#dropdown").style.alignItems = "center";
};

let buttonOne = document.getElementById("button1");
let menuOne = document.getElementById("menu1");
let buttonTwo = document.getElementById("button2");
let menuTwo = document.getElementById("menu2");
let buttonThree = document.getElementById("button3");
let menuThree = document.getElementById("menu3");
let buttonFour = document.getElementById("button4");
let menuFour = document.getElementById("menu4");
let buttonFive = document.getElementById("button5");
let menuFive = document.getElementById("menu5");

function openMenuOne() {
  if (menu1.style.display === "none") {
    menu1.style.display = "block";
  } else {
    menu1.style.display = "none";
  }
}

function openMenuTwo() {
  if (menu2.style.display === "none") {
    menu2.style.display = "block";
  } else {
    menu2.style.display = "none";
  }
}

function openMenuThree() {
  if (menu3.style.display === "none") {
    menu3.style.display = "block";
  } else {
    menu3.style.display = "none";
  }
}

function openMenuFour() {
  if (menu4.style.display === "none") {
    menu4.style.display = "block";
  } else {
    menu4.style.display = "none";
  }
}

function openMenuFive() {
  if (menu5.style.display === "none") {
    menu5.style.display = "block";
  } else {
    menu5.style.display = "none";
  }
}

buttonOne.addEventListener("click", openMenuOne);
buttonTwo.addEventListener("click", openMenuTwo);
buttonThree.addEventListener("click", openMenuThree);
buttonFour.addEventListener("click", openMenuFour);
buttonFive.addEventListener("click", openMenuFive);
