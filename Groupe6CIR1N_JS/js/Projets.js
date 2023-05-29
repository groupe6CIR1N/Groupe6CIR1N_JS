function main(){
    scrol();
}

//Change la photo ou fais plutot apparaitre et disparaitre la photo quand on clique dessus
function photo1(){
    //On fait disparaitre la photo ou l'on clique dessus
    let photo = document.getElementsByClassName("photo1")[0];
    photo.style.display = "none";
    //On fait apparaitre l'autre
    let photo2 = document.getElementsByClassName("photo5")[0];
    photo2.style.display = "block";
};

//Même principe
function photo2(){
    let photo = document.getElementsByClassName("photo2")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo6")[0];
    photo2.style.display = "block";
};

//Même principe
function photo3(){
    let photo = document.getElementsByClassName("photo3")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo7")[0];
    photo2.style.display = "block";
};

//Même principe
function photo4(){
    let photo = document.getElementsByClassName("photo4")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo8")[0];
    photo2.style.display = "block";
};

//Même principe
function photo5(){
    let photo = document.getElementsByClassName("photo5")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo1")[0];
    photo2.style.display = "block";
};

//Même principe
function photo6(){
    let photo = document.getElementsByClassName("photo6")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo2")[0];
    photo2.style.display = "block";
};

//Même principe
function photo7(){
    let photo = document.getElementsByClassName("photo7")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo3")[0];
    photo2.style.display = "block";
}

//Même principe
function photo8(){
    let photo = document.getElementsByClassName("photo8")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo4")[0];
    photo2.style.display = "block";
};


function scrol(){
    let btn = document.querySelector(".btn");

    //Au clique sur le bouton on lance cette fonction
    btn.addEventListener('click', ()=>{

        //Permet de faire le srcoll tout en haut
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",//Au lieu que ce soit brutal sa glisse
        })

    })
};

main();

