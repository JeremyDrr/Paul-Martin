// Converti l'image de l'écusson en base64 pour l'envoi par mail, ATTENTION AUX IMAGES TROP LOURDES 
function transformeImgEnBase64(element) {

  // On récupère le premier fichier de l'élement courant
  var file = element.files[0];
  var reader = new FileReader();
  
  reader.onloadend = function() {
    
    // Converti les signes "+" en "%2B" en particulier, car ce signe ne peut pas être utilisé sur la boite de messagerie. 
    var encoded_url = encodeURIComponent(reader.result);
    
    // Affecte la valeur à l'input de type hidden, car un input de type file ne peut pas avoir une valeure affectée
    document.getElementById('imgEcussonEnBase64').value = encoded_url;
  }
  reader.readAsDataURL(file);
}


function verifFormulaire(){
  valide = false;
  if (document.getElementById('imgEcussonEnBase64').value == "" && document.getElementById('descEcusson').value == "" ){
    alert("Merci de soit saisir une description, ou d'insérer une image.");
  }
  else{
    valide = true;
  }
  return valide;
}