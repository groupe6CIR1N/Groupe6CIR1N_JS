function Date(){
    const options2 = {weekday: 'long',year:'numeric',month:'long',day:'numeric'};
    let time = event2.toLocaleTimeString("en-FR");
    context.beginPath();
    context.font = "20px serif "
    context.fillText(time,185,260);
    context.stroke();
}