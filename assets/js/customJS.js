// Converti l'image de l'écusson en base64 pour l'envoi par mail, ATTENTION AUX IMAGES TROP LOURDES 
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    
    reader.onloadend = function() {
      resultat = reader.result
      document.getElementById('imgEcussonEnBase64').value = reader.result;
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
  return valide
}
