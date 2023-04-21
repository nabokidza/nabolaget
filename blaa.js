
const type = "blaa";
const oppgaver = [
    {id:1, beskrivelse:"Du kan selv gå to steg frem", lyd:"Joker2.m4a", bilde:""},
    {id:2, beskrivelse:"Du kan velge en spiller som må gå et steg tilbake 🌵", lyd:"Joker1.m4a" , bilde:""},
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