
const type = "gronn";
const rimeoppgaver = [
    {id:"oppgave1", riktig:"mus.png", riktigLyd:"riktig1.mp3", fokus:"hus.png", feil:["elefant.png","melk.png","vindmolle.png"], beskrivelse:"Hva rimer på hus?" , lyd:"oppgave4.m4a"},
    {id:"oppgave2", riktig:"katt.png", riktiglyd:"riktig1.mp3", fokus:"hatt.png", feil:["malk.png", "vindmolle.png", "elefant.png"], beskrivelse:"Hva rimer på hatt?" , lyd:"oppgave3.m4a"},
    {id:"oppgave3", riktig:"stol.png", riktiglyd:"riktig1.mp3", fokus:"sol.png", feil:["mus.png", "hatt.png", "katt.png"], beskrivelse:"Hva rimer på sol?" , lyd:"oppgave2.m4a"},
    
]

const oppgaveBeskrivelse = document.getElementById("oppgave");
const bilder = document.getElementById("bilder");
const fokus = document.getElementById("fokus");
const lydknapp = document.getElementById("lyd");
const riktig = document.getElementById("riktig");
let oppgaveLyd = lagLyd();
let feilLyd = lagLyd();
feilLyd.src = `lydfiler/feil.m4a`
let riktigLyd = lagLyd();

document.body.appendChild(oppgaveLyd);
document.body.appendChild(feilLyd);
document.body.appendChild(riktigLyd);


function lagLyd(){
    let a = document.createElement("audio");
    a.setAttribute("preload","none")
    document.body.appendChild(a);
    return a
}

function showTask(oppgave){
    
    // Viser teksten
    oppgaveBeskrivelse.innerText = oppgave.beskrivelse;
    // Viser vi "fokus bilde"
    let img = document.createElement("img");
    img.src = `bilder/${type}/${oppgave.id}/${oppgave.fokus}`;
    fokus.appendChild(img);

    // Legger vi til riktig bilde blant de som er feil
    img = document.createElement("img");
    img.src = `bilder/${type}/${oppgave.id}/${oppgave.riktig}`;
    img.setAttribute("style",tilfeldigPos());
    img.onclick = (e)=>{
        riktigLyd.play();
        riktig.classList.remove("hidden");
    }
    bilder.appendChild(img);


    // Legger til alle bildene som er feil 
    for(let teller = 0; teller < oppgave.feil.length; teller++ ){
        let img = document.createElement("img");
        img.src = `bilder/${type}/${oppgave.id}/${oppgave.feil[teller]}`;
        img.setAttribute("style",tilfeldigPos());
        img.onclick = (e)=>{
            feilLyd.play();
        }
        bilder.appendChild(img);
    }

    riktigLyd.src = `lydfiler/${oppgave.riktigLyd}`
    oppgaveLyd.src = `lydfiler/${type}/${oppgave.lyd}`;

  
}

let oppgaveIndex = Math.round(Math.random() * (rimeoppgaver.length -1));


showTask(rimeoppgaver[oppgaveIndex]);

function tilfeldigPos(){
    let top = Math.round(Math.random() * (300 -25))+25;
        let left = Math.round(Math.random() * (window.innerWidth -25))+25;

        return`left:${left}px;top:${top}`
}

lydknapp.onclick = () => {
    oppgaveLyd.play();
}
