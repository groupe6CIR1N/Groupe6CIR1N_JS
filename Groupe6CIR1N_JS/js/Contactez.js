function main(){
    setInterval(()=> {
    //3 variables qui contiennent les valeurs des fonctions donc soit les conditions sont respectées, soit non
    let name = name_();
    let mail = mail_();
    let text = text_();
    //On accède au boutton
    const boutton = document.getElementById("boutton");
    //On met initialement qu'il ne marche pas
    boutton.disabled = true;
    
    //Des que les trois règles sont respecté on le fait fonctionner
    if(name==1 && mail==1 && text==1){
        boutton.style.color = 'blue';
        boutton.disabled = false;
    }
    else{
        boutton.style.color = 'red';
        boutton.disabled = true;
    }
   },100)



}

function name_(){
    var name = document.getElementById("name").value; //On accède a l'entré de l'utilisateurr
    var error = document.getElementsByClassName("error")[0]; //Le petit texte qui s'affiche en dessous

    //On vérifie si les conditions sont vérifiés
    if(name.length > 0 && name.indexOf(" ") !==-1){
        //Si elle le sont en change le texte sous la saisie utilisateur et on renvoie 1
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        console.log('c\'est bon n')
        return 1;
    }
    else{
        error.style.color = 'red'
        error.innerHTML = 'Il n\'y a pas votre Prénom et Nom'
        console.log('c\'est pas bon n');
        return 0;
    }
};

//On procède de la même façon 
function mail_(){
    var mail = document.getElementById("mail").value;
    var error = document.getElementsByClassName("error")[1];

    if(mail.indexOf(".") !==-1 && mail.indexOf("@") !==-1){
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        console.log('c\'est bon m')
        return 1;
    }
    else{
        error.style.color = 'red'
        error.innerHTML = 'Il n\'y a pas les caractères souhaitez (\'@\' et \'.\')'
        console.log('c\'est pas bon m');
        return 0;
    }
};

//On procède de la même façon 
function text_(){
    var text = document.getElementById("text").value;
    var error = document.getElementsByClassName("error")[2];

    if(text.length > 20){
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        console.log('cest bon t');
        return 1;
    }
    else{
        error.style.color = 'red'
        error.innerHTML = 'Il n\'y a pas assez de caractères'
        console.log('c\'est pas bon t');
        return 0;
    }
};

main()