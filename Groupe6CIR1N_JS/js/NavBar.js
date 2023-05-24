function main(){
    setInterval(TheDate,1000);
    timer();
    // window.addEventListener('load',NavBar);
}

function TheDate(){
    let time = new Date()

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    document.getElementById("hours-d").innerHTML = hours;
    document.getElementById("minutes-d").innerHTML = minutes;
    document.getElementById("seconds-d").innerHTML = seconds;
}

function timer(){
    let time = new Date()

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    setInterval(()=>{
    let hours2 = time.getHours();
    let minutes2 = time.getMinutes();
    let seconds2 = time.getSeconds(); 

    document.getElementById("hours-t").innerHTML =  hours2 - hours;
    document.getElementById("minutes-t").innerHTML =  minutes2 - minutes;
    document.getElementById("seconds-t").innerHTML = seconds2 - seconds;
    },1000
    );

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
        console.log(header);
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
    document.addEventListener('copy', function(event) {
      event.preventDefault();
      alert('Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.');
     });
  }
  
function detecterCopie() {
  document.addEventListener('copy', function(event) {
    event.preventDefault();
    alert('Attention ! Le plagiat est interdit en France. Veuillez respecter les droits d`auteur et citer vos sources.');
  });
}

window.onload = () => {
    main();
    NavBar();
    detecterCopie()
}

