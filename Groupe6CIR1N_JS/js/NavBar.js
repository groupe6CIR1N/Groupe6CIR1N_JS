function main(){
    setInterval(TheDate,1000);
    timer();
}

function TheDate(){
    let time = new Date()

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    if(hours < 10){
        document.getElementById("hours-d").innerHTML = "0" + hours;
    }
    else{
        document.getElementById("hours-d").innerHTML = hours;
    }
    if(minutes < 10){
        document.getElementById("minutes-d").innerHTML = "0"+ minutes;
    }
    else{
        document.getElementById("minutes-d").innerHTML = minutes;  
    }
    if(seconds < 10){
        document.getElementById("seconds-d").innerHTML = "0" + seconds;
    }
    else{
        document.getElementById("seconds-d").innerHTML = seconds;
    }
    
}

function timer() {
    let startTime = new Date(); // Moment de démarrage
  
    setInterval(() => {
      let currentTime = new Date(); // Moment actuel
  
      let timeDifference = currentTime - startTime; // Différence de temps en millisecondes
  
      let seconds = Math.floor(timeDifference / 1000); // Conversion en secondes
  
      let hours = Math.floor(seconds / 3600); // Calcul des heures
      seconds %= 3600; // Secondes restantes après avoir calculé les heures
  
      let minutes = Math.floor(seconds / 60); // Calcul des minutes
      seconds %= 60; // Secondes restantes après avoir calculé les minutes
  
      // Affichage du temps écoulé dans les éléments HTML correspondants
    if(hours < 10){
        document.getElementById("hours-t").innerHTML = "0" + hours;
    }
    else{
        document.getElementById("hours-t").innerHTML = hours;
    }
    if(minutes < 10){
        document.getElementById("minutes-t").innerHTML = "0"+ minutes;
    }
    else{
        document.getElementById("minutes-t").innerHTML = minutes;  
    }
    if(seconds < 10){
        document.getElementById("seconds-t").innerHTML = "0" + seconds;
    }
    else{
        document.getElementById("seconds-t").innerHTML = seconds;
    }
    }, 1000);
  }

function toAccueil(){
    document.location.href = "../html/Accueil.html";
}

function Antinavbar(){

    let header = document.getElementsByClassName("navbar")[0];
    header.style.opacity = "1";
    let footer = document.getElementsByClassName("footer")[0];
    footer.style.opacity = "1";
    let contenu = document.getElementsByClassName("contenu")[0];
    contenu.style.opacity = "1";

    let loader = document.getElementsByClassName("lds-heart")[0];
    loader.style.display = "none";

}

function NavBar(){

        
        let header = document.getElementsByClassName("navbar")[0];
        header.style.opacity = "0.2"; 
        let footer = document.getElementsByClassName("footer")[0];
        footer.style.opacity = "0.2";
        let contenu = document.getElementsByClassName("contenu")[0];
        contenu.style.opacity = "0.2";
    
        let loader = document.getElementsByClassName("lds-heart")[0];
        loader.style.display = "inline-block";

        setTimeout(Antinavbar,2000);
}
  
function detecterCopie() {
  document.addEventListener('copy', function(event) {//ecoute la copie sur le document 
    alert('Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.');
    console.log("Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.")
});

}

window.onload = () => {
    main();
    NavBar();
    detecterCopie()
}

