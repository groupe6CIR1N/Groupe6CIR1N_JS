function main(){
    scrol();
}

function photo1(){
    let photo = document.getElementsByClassName("photo1")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo5")[0];
    photo2.style.display = "block";
};

function photo2(){
    let photo = document.getElementsByClassName("photo2")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo6")[0];
    photo2.style.display = "block";
};

function photo3(){
    let photo = document.getElementsByClassName("photo3")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo7")[0];
    photo2.style.display = "block";
};

function photo4(){
    let photo = document.getElementsByClassName("photo4")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo8")[0];
    photo2.style.display = "block";
};

function photo5(){
    let photo = document.getElementsByClassName("photo5")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo1")[0];
    photo2.style.display = "block";
};

function photo6(){
    let photo = document.getElementsByClassName("photo6")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo2")[0];
    photo2.style.display = "block";
};

function photo7(){
    let photo = document.getElementsByClassName("photo7")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo3")[0];
    photo2.style.display = "block";
}

function photo8(){
    let photo = document.getElementsByClassName("photo8")[0];
    photo.style.display = "none";
    let photo2 = document.getElementsByClassName("photo4")[0];
    photo2.style.display = "block";
};

function scrol(){
    let btn = document.querySelector(".btn");

    btn.addEventListener('click', ()=>{

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })

    })
};

main();

