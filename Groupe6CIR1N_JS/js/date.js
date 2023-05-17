function main(){
    setInterval(TheDate,1000);
    timer();

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

    setInterval(function(){
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

main();