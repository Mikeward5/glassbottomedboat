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
let buttonsix = document.getElementById("button6");
let menusix = document.getElementById("menu6");

function openMenuOne() {
  if (menu1.style.display === "block") {
    menu1.style.display = "none";
  } else {
    menu1.style.display = "block";
  }
}

function openMenuTwo() {
  if (menu2.style.display === "block") {
    menu2.style.display = "none";
  } else {
    menu2.style.display = "block";
  }
}

function openMenuThree() {
  if (menu3.style.display === "block") {
    menu3.style.display = "none";
  } else {
    menu3.style.display = "block";
  }
}

function openMenuFour() {
  if (menu4.style.display === "block") {
    menu4.style.display = "none";
  } else {
    menu4.style.display = "block";
  }
}

function openMenuFive() {
  if (menu5.style.display === "block") {
    menu5.style.display = "none";
  } else {
    menu5.style.display = "block";
  }
}

function openMenuSix() {
  if (menu6.style.display === "block") {
    menu6.style.display = "none";
  } else {
    menu6.style.display = "block";
  }
}

buttonOne.addEventListener("click", openMenuOne);
buttonTwo.addEventListener("click", openMenuTwo);
buttonThree.addEventListener("click", openMenuThree);
buttonFour.addEventListener("click", openMenuFour);
buttonFive.addEventListener("click", openMenuFive);
buttonsix.addEventListener("click", openMenuSix);
