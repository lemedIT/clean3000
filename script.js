// Fonction changement page
document.addEventListener('DOMContentLoaded', function() {
  clientSelectionChanged();
});

// fonction changement menu
function clientSelectionChanged() {
  // Récupérer les éléments du DOM
  var nomClientDropdown = document.getElementById('nomClient');
  var saisieManuelleDiv = document.getElementById('saisieManuelle');
  var saisieManuelleInput = document.getElementById('saisieManuelleClient');

  // vérifier si rien n'a été selectionné
  if (nomClientDropdown.value === "") {
    // si c'est vide, le champs manuel s'affiche
    saisieManuelleDiv.style.display = 'block';
    saisieManuelleInput.required = true;
  } else {
    // si elle es pas vide, le champs disparait
    saisieManuelleDiv.style.display = 'none';
    saisieManuelleInput.required = false;
  }
}

// fonction quand on clique envoyer
function submitForm() {
  // recuperation infos formulaire
  var nomClientDropdown = document.getElementById('nomClient');
  var saisieManuelleInput = document.getElementById('saisieManuelleClient');
  var nomClient = nomClientDropdown.value === "" ? saisieManuelleInput.value : nomClientDropdown.value;
  var dateIntervention = document.getElementById('dateIntervention').value;
  var observations = document.getElementById('observations').value;
  var signatureTechnicien = document.getElementById('signatureTechnicien').value;
  var signatureClient = document.getElementById('signatureClient').value;

  // stockage infos formulair
  var formulaireData = {
    nomClient: nomClient,
    dateIntervention: dateIntervention,
    observations: observations,
    signatureTechnicien: signatureTechnicien,
    signatureClient: signatureClient
  };

  // stoack en local
  localStorage.setItem('formulaireData', JSON.stringify(formulaireData));

  // redirection
  window.location.href = 'recapitulatif.html';
}

// GRAFIKART JTM
