function main(){

};

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

function translate(){
    let txt = document.getElementsByClassName("txt")[0];
};

main();