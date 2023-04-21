const type = "Gul";
const oppgaver = [
    {id:1, losning:"losning.png", 
    biter:[
        { koordinater:"105,1506,228,1383,460,1383,340,1511", riktigBilde:"004.png", form:"poly"},
        { koordinater:"98,1017,593,1022,346,1269", riktigBilde:"008.png", form:"poly"}, 
        { koordinater:"232,1379,459,1379,344,1271", riktigBilde:"006.png", form:"poly"}, 
        { koordinater:"352,1267,463,1379,591,1249,482,1135", riktigBilde:"001.png", form:"poly"},
        { koordinater:"486,1133,592,1023,591,1240", riktigBilde:"005.png", form:"poly"},
        { koordinater:"346,1506,593,1252,595,1509", riktigBilde:"003.png", form:"poly"},
        { koordinater:"104,1024,102,1503,344,1264", riktigBilde:"007.png", form:"poly"},
    ] },
    {
    
        id:2, losning:"102.png",
        biter:[
            { koordinater:"942,847,775,1014,952,1009", riktigBilde:"107.png", form:"poly"},
            { koordinater:"950,846,1144,846,1138,1005,958,100", riktigBilde:"106.png", form:"poly"},
            { koordinater:"954,1012,1136,1012,964,1193,783,1188", riktigBilde:"103.png", form:"poly"},
            { koordinater:"789,1195,960,1193,787,1353", riktigBilde:"104.png", form:"poly"},
            { koordinater:"973,1191,786,1363,971,1553", riktigBilde:"108.png", form:"poly"}, 
            { koordinater:"979,1205,979,1549,1330,1548", riktigBilde:"101.png", form:"poly"}, 
            { koordinater:"980,1192,1471,1197,1227,1440", riktigBilde:"105.png", form:"poly"},
            
            
    ] },
    {
        id:3, losning:"206.png",
        biter:[
            { koordinater:"1100,559,973,690,1090,807,1230,666,1223,666", riktigBilde:"205.png", form:"poly"},
            { koordinater:"846,684,650,869,1014,881", riktigBilde:"201.png", form:"poly"},
            { koordinater:"1159,872,1313,696,1497,682,1340,870", riktigBilde:"2014.png", form:"poly"},
            { koordinater:"844,1058,1340,1054,1089,808", riktigBilde:"208.png", form:"poly"},
            { koordinater:"846,1063,1337,1062,1089,1310", riktigBilde:"202.png", form:"poly"},
            { koordinater:"842,1264,981,1211,903,1411", riktigBilde:"207.png", form:"poly"},
            { koordinater:"1200,1205,1353,1258,1303,1402", riktigBilde:"203.png", form:"poly"},
            
   ] }
];

const map = document.getElementById("taskMap");
const maalBilde = document.getElementById("oppgave");
const bilder = document.getElementById("bilder");

let draged = null ;
let over = null;

function showTask(oppgave){
   
    map.innerHTML = "";
    maalBilde.src =  `bilder/${type}/oppgave${oppgave.id}/${oppgave.losning}`
    
    oppgave.biter.forEach(bit => {
        
        let area = document.createElement("area");
        area.coords = bit.koordinater;
        area.shape = bit.form;
        area.id = "t_"+bit.riktigBilde;
        area.href = "#test"
        area.onmouseover = onOverTarget;
        
        map.appendChild(area);

        let img = document.createElement("img");
        img.id = bit.riktigBilde;
        img.src = `bilder/${type}/oppgave${oppgave.id}/${bit.riktigBilde}`;
        img.style = tilfeldigPos();
        img.onmousedown = (evt) => {
            if(draged){
                draged = null;
                return;
            }

            draged = evt.target;
        }

        bilder.appendChild(img)
    });

    maalBilde.setAttribute("usemap", "#taskMap");
}

function onOverTarget(evt){
    
        console.log("Over", evt.target.id)
        over = evt.target;
    
};

function move(evt){
    if(draged){
        let offsetx = draged.width * 0.5;
        let offsety = draged.height * 0.5
        let newX = evt.clientX - offsetx;
        let newY = evt.clientY - offsety;
        draged.style.left = newX + "px";
        draged.style.top = newY + "px";
    }
}

let oppgaveIndex = Math.round( Math.random() * (oppgaver.length-1)) ;
oppgaveIndex = 2;
showTask(oppgaver[oppgaveIndex]);

function tilfeldigPos(){
    let top = Math.round(Math.random() * (10))+25;
    let left = Math.round(Math.random() * (window.innerWidth -25))+25;
    return`left:${left}px;top:${top}px;position:absolute`
}

document.addEventListener("mousemove", move, false);
        
