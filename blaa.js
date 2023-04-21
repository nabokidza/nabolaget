
const type = "blaa";
const oppgaver = [
    {id:1, beskrivelse:"Stein, saks, papir. Best av tre.", lyd:"bla1.m4a", bilde:""},
    {id:2, beskrivelse:"Tre på rad", lyd:"bla2.m4a" , bilde:""},
    {id:3, beskrivelse:"Bygg et tårn med legoklosser", lyd:"bla3.m4a", bilde:""},
    {id:4, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde""},
    {id:5, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde""},
    {id:6, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde""},
    
 
]

const oppgaveBeskrivelse = document.getElementById("oppgave");
const lydknapp = document.getElementById("lyd");
const oppgaveBilde = document.getElementById("oppgaveBilde");
let oppgaveLyd = lagLyd();
document.body.appendChild(oppgaveLyd);

function lagLyd(){
    let a = document.createElement("audio");
    a.setAttribute("preload","none")
    document.body.appendChild(a);
    return a
}

function showTask(oppgave){
    // Viser teksten
    oppgaveBeskrivelse.innerText = oppgave.beskrivelse;
    oppgaveLyd.src = `lydfiler/${type}/${oppgave.lyd}`;
    oppgaveBilde.src = `bilder/${type}/${oppgave.bilde}`;
}

let oppgaveIndex = Math.random() >= 0.5 ? 0:1; 

showTask(oppgaver[oppgaveIndex]);

lydknapp.onclick = () => {
    oppgaveLyd.play();
}
