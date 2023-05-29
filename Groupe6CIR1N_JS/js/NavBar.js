function main(){
    setInterval(TheDate,1000);
    timer();
    acces();
}

function TheDate(){
    //fonction qui permet d'afficher l'heure sur nos pages
    let time = new Date()

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    //on vérifie qu'il y a toujours de chiffre autrement on rajoute un zéro
    if(hours < 10){
        document.getElementById("hours-d").innerHTML = "0" + hours; //on remplace le texte par l'heure
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
    //A peut près le même principe sauf que c'est un timer, du temps qu'on passe sur la page
    let startTime = new Date(); // Moment de démarrage
    
    //Permet de mettre a jour toute les secondes le timer
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
    //redirige vers la page Accueil
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
        //permet de faire le "flou" en arrière plan 
        let header = document.getElementsByClassName("navbar")[0];
        header.style.opacity = "0.2"; 
        let footer = document.getElementsByClassName("footer")[0];
        footer.style.opacity = "0.2";
        let contenu = document.getElementsByClassName("contenu")[0];
        contenu.style.opacity = "0.2";
        //permet d'afficher notre loader
        let loader = document.getElementsByClassName("lds-heart")[0];
        loader.style.display = "inline-block";
        //lance la fonction antinavbar au bout de 2sec pour tout remettre à zéro
        setTimeout(Antinavbar,2000);
}
  
function detecterCopie() {
    //permet de mettre dans la console les règles du plagiats 
    document.addEventListener('copy', function(event) {//ecoute la copie sur le document 
    alert('Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.');
    console.log("Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.")
});

}

function acces(){
    
    let member = document.getElementById('4');//On accède a notre boutton membre

    member.addEventListener('click', ()=>{//Quand on click sur le boutton on lance un prompt qui vérifie si l'on veut vraiment aller sur la page

        let page = prompt("Voulez vous vraiment naviguer vers cette page ?");
        
        if(page.toLowerCase() == "oui"){
            document.location.href = "../html/Membres.html";
        }
        if(page.toLowerCase() == "non"){
            document.location.href = "";
        }
        else{
            console.log("Veuillez répondre par oui ou non")
        }

    })
}

//permet de lancer ses fonctions des que la page se lance
window.onload = () => {
    main();
    NavBar();
    detecterCopie()
}

