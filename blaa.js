

const type = "blaa";
const oppgaver = [
    {id:1, beskrivelse:"Tre på rad", lyd:"bla2.m4a", bilde:"Tiktak2.jpg" },
    {id:2, beskrivelse:"Bygg et tårn med legoklosser", lyd:"bla3.m4a", bilde:"lego.png" },
    {id:3, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster1.PNG" },
    {id:4, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster2.PNG" },
    {id:5, beskrivelse:"Fullfør mønsteret", lyd:"guloppgave567.m4a", bilde"monster3.PNG" },
    {id:6, beskrivelse:"Stein saks papir. Best av tre👊🏼✌🏽🤚", lyd:"bla1.m4a" },

    
]

const oppgaveBeskrivelse = document.getElementById("oppgave");
const bilde = document.getElementById("bilde");
const lydknapp = document.getElementById("lyd");
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
     oppgaveBilde.src = bilder/${type}/${oppgave.bilde};
    oppgaveLyd.src = `lydfiler/${type}/${oppgave.lyd}`;

}

let oppgaveIndex = Math.round( Math.random() * (oppgaver.length-1)) ;

showTask(oppgaver[oppgaveIndex]);

lydknapp.onclick = () => {
    oppgaveLyd.play();
}
