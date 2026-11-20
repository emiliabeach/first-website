// Candy game

// Skapar en räknare som börjar på noll godisar
let godisar = 0;

// Varje gång man klickar på knappen
function geGodis() {
  godisar = godisar + 1; // Lägger till en på antalet godisar

  // Hämtar elementen från HTML som ska uppdateras vid knapptryck
  const antal = document.getElementById("antal");
  const bild = document.getElementById("nelly-bild");
  const meddelande = document.getElementById("meddelande");

  // Visar den nya siffran på skärmen
  antal.innerText = godisar;

  // Om man har gett en godis
  if (godisar === 1) {
    meddelande.innerText = "Voff! Tack för den första godisen!";
    bild.src = "./images/Tack1godis.jpg"; // Byter till första bilden
  }
  // Annars, om man har gett fem godisar
  else if (godisar === 5) {
    meddelande.innerText = "5 stycken! Nu viftar svansen som en propeller!";
    bild.src = "./images/NellyYaygodis.jpg"; // Byter till glada bilden
  }
  // Annars, om man har gett tio godisar eller fler
  else if (godisar >= 10) {
    meddelande.innerText =
      "Stopp! Nu blir Nelly alldeles för mätt och vill sova!";
    bild.src = "./images/Nellyojgodis.jpg"; // Byter till mätta bilden
  }
}

// Dark-mode

// När sidan laddas
window.onload = function () {
  // Hämtar knappen för mörkt läge från HTML
  const btn = document.getElementById("dark-button");

  // Kollar om localStorage minns att användaren ville ha mörkt läge
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode"); // Aktiverar mörkt läge
    btn.innerText = "LJUST LÄGE"; // Ändrar texten på knappen
  }
};

// Varje gång man klickar på knappen
function toggleDarkMode() {
  var element = document.body;
  const btn = document.getElementById("dark-button");

  // Växlar till eller från klassen "dark-mode" på body
  element.classList.toggle("dark-mode");

  // Om sidan just nu har mörkt läge aktiverat
  if (element.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark"); // Spara valet "dark" i webbläsaren
    btn.innerText = "LJUST LÄGE"; // Ändrar texten på knappen till ljust

  // Annars, om det är ljust läge:
  } else {
    localStorage.setItem("theme", "light"); // Sparar valet "light" i webbläsaren
    btn.innerText = "MÖRKT LÄGE"; // Ändrar texten på knappen till mörkt
  }
}
