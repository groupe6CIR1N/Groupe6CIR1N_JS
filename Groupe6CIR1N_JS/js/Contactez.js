function main(){
    setInterval(()=> {

    let name = name_();
    let mail = mail_();
    let text = text_();
    const boutton = document.getElementById("boutton");
    
    //console.log(name);
    //console.log(mail);
    //console.log(text);


    boutton.disabled = true;


    if(name==1 && mail==1 && text==1){
        boutton.style.color = 'blue';
        boutton.disabled = false;
    }
   },100)



}

function name_(){
    var name = document.getElementById("name").value;
    var error = document.getElementsByClassName("error")[0];

    if(name.length > 0 && name.indexOf(" ") !==-1){
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        //console.log('c\'est bon n')
        return 1;
    }
    else{
        //console.log('c\'est pas bon n');
        return 0;
    }
};

function mail_(){
    var mail = document.getElementById("mail").value;
    var error = document.getElementsByClassName("error")[1];

    if(mail.indexOf(".") !==-1 && mail.indexOf("@") !==-1){
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        //console.log('c\'est bon m')
        return 1;
    }
    else{
        //console.log('c\'est pas bon m');
        return 0;
    }
};

function text_(){
    var text = document.getElementById("text").value;
    var error = document.getElementsByClassName("error")[2];

    if(text.length > 20){
        error.style.color = 'blue'
        error.innerHTML = 'C\'est good!!'
        //console.log('cest bon t');
        return 1;
    }
    else{
        //console.log('c\'est pas bon t');
        return 0;
    }
};

main()