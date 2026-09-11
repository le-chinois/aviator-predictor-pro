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
  if (historique.length === 0) return;

  const total = historique.reduce((a, b) => a + b, 0);
  const moyenne = total / historique.length;
  const minimum = Math.min(...historique);
  const maximum = Math.max(...historique);

  console.log("Résultats analysés :", historique);
  console.log("Moyenne :", moyenne.toFixed(2) + "x");
  console.log("Minimum :", minimum.toFixed(2) + "x");
  console.log("Maximum :", maximum.toFixed(2) + "x");

  // Indicateur statistique simple
  let niveau = "Normal";

  if (moyenne < 1.50) {
    niveau = "Risque élevé";
  } else if (moyenne >= 2.50) {
    niveau = "Tendance élevée";
  }

  console.log("Indicateur :", niveau);
}
