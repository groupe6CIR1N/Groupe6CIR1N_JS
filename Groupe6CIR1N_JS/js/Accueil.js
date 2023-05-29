function main(){

}
///////Zoom sur le schéma des compétences////////
function zoom(){
    let diagramme = document.getElementsByClassName("diagramme")[0];
        diagramme.style.height = "600px";
        diagramme.style.width = "1200px";
};
function dezoom(){
    let diagramme = document.getElementsByClassName("diagramme")[0];
    diagramme.style.height = "400px";
    diagramme.style.width = "800px";
};
/////////////////////////////////

 //////Qui sommes nous/////////

 function afficherTexteMotParMot() {
  var texte = "Qui sommes nous ?";
  var div = document.querySelector(".QSN");
  var mots = texte.split(" ");// spare les mots 
  var indexMot = 0;
// fonction qui affiche mot a mot 
  function afficherMotSuivant() {
    if (indexMot < mots.length) {
      div.innerHTML += mots[indexMot] + " ";
      indexMot++;
      setTimeout(afficherMotSuivant, 1000);
    } else {
      setTimeout(function() {
        div.classList.add("glisser-droite"); // Ajoute la classe d'animation CSS
        setTimeout(function() {
          div.innerHTML = ""; // Vide la div 
          div.classList.remove("glisser-droite"); // Retire la classe d'animation CSS
          setTimeout(afficherTexteMotParMot, 2000);// Appelle recursif 
        }, 1000);
      }, 1000);
    }
  }

  afficherMotSuivant();
}
afficherTexteMotParMot();

///////////////////////////////

main();


