function submitForm() {
    var nomClient = document.getElementById('nomClient').value;
    var dateIntervention = document.getElementById('dateIntervention').value;
    var observations = document.getElementById('observations').value;
    var signatureTechnicien = document.getElementById('signatureTechnicien').value;
    var signatureClient = document.getElementById('signatureClient').value;
  
    // objet
    var formulaireData = {
      nomClient: nomClient,
      dateIntervention: dateIntervention,
      observations: observations,
      signatureTechnicien: signatureTechnicien,
      signatureClient: signatureClient
    };
  
    // stockagee en local
    localStorage.setItem('formulaireData', JSON.stringify(formulaireData));
  
    // redirection
    window.location.href = 'recapitulatif.html';
  }
  