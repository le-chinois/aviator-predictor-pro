// AVIATOR PREDICTOR PRO
// Created by CHINOIS

let historique = [];

function ajouterMultiplicateur() {
  const input = document.getElementById("multiplicateur");
  const valeur = parseFloat(input.value);

  if (isNaN(valeur) || valeur <= 0) {
    alert("Entre un multiplicateur valide.");
    return;
  }

  historique.push(valeur);
  input.value = "";

  analyser();
}

function analyser() {
  const nombre = historique.length;

  const total = historique.reduce((a, b) => a + b, 0);
  const moyenne = total / nombre;

  const minimum = Math.min(...historique);
  const maximum = Math.max(...historique);

  let niveau = "Normal";

  if (moyenne < 1.50) {
    niveau = "Risque élevé";
  } else if (moyenne >= 2.50) {
    niveau = "Tendance élevée";
  }

  document.getElementById("nombre").textContent = nombre;
  document.getElementById("moyenne").textContent =
    moyenne.toFixed(2) + "x";

  document.getElementById("minimum").textContent =
    minimum.toFixed(2) + "x";

  document.getElementById("maximum").textContent =
    maximum.toFixed(2) + "x";

  document.getElementById("niveau").textContent = niveau;
}
