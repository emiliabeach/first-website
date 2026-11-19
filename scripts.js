// Candy game
let godisar = 0;

function geGodis() {
  godisar = godisar + 1;

  const antal = document.getElementById("antal");
  const bild = document.getElementById("nelly-bild");
  const meddelande = document.getElementById("meddelande");

  antal.innerText = godisar;

  if (godisar === 1) {
    meddelande.innerText = "Voff! Tack för den första godisen!";
    bild.src = "./images/Tack1godis.jpg";
  } else if (godisar === 5) {
    meddelande.innerText = "5 stycken! Nu viftar svansen som en propeller!";
    bild.src = "./images/NellyYaygodis.jpg";
  } else if (godisar >= 10) {
    meddelande.innerText = "Stopp! Nu blir Nelly alldeles för mätt och vill sova!";
    bild.src = "./images/Nellyojgodis.jpg";
  }
}

// Dark-mode
window.onload = function () {
  const btn = document.getElementById("dark-button");

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    btn.innerText = "LJUST LÄGE";
  }
};

function toggleDarkMode() {
  var element = document.body;
  const btn = document.getElementById("dark-button");

  element.classList.toggle("dark-mode");

  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    btn.innerText = "LJUST LÄGE";
  } else {
    localStorage.setItem("theme", "light");
    btn.innerText = "MÖRKT LÄGE";
  }
}
