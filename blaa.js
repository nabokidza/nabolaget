
const type = "blaa";
const oppgaver = [
    {id:"blaa1", beskrivelse:"Stein saks papir. Best av tre👊🏼✌🏽🤚", lyd:"bla1.m4a" },
    {id:"blaa1", beskrivelse:"Tre på rad", lyd:"bla2.m4a", bilde:"Tiktak2.jpg" },
    {id:"blaa1", beskrivelse:"Bygg et tårn med legoklosser", lyd:"bla3.m4a", bilde:"lego.png" },
    {id:"blaa1", beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster1.PNG" },
    {id:"blaa1", beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster2.PNG" },
    {id:"blaa1", beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster3.PNG" },
    
]

const oppgaveBeskrivelse = document.getElementById("oppgave");
const lydknapp = document.getElementById("lyd");
const bilde = document.getElementById("bilde");
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

let oppgaveIndex = Math.round( Math.random() * (oppgaver.length-1)) ;

showTask(oppgaver[oppgaveIndex]);

lydknapp.onclick = () => {
    oppgaveLyd.play();
}
