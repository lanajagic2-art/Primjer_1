const naslov=document.getElementById("naslov");
const ispis=document.getElementById("ispis");
const gumb1=document.getElementById("povecaj");
const gumb2=document.getElementById("ponisti");
const gumb3=document.getElementById("gumb3");
let cnt=0;

function klik(){
    cnt=cnt+1;
    ispis.textContent="Broj klikova: "+cnt;

    if(cnt==10){
        naslov.textContent="Došao si do 10!"
        naslov.style.color="green";
    }
}
function ponisti(){
    cnt=0;
    ispis.textContent="Broj klikova: "+cnt;
    naslov.textContent="Brojač klikova";
    naslov.style.color="black";
}
function velicinaProzora(){
    alert("Širina: "+window.innerWidth+"px, visina: "+window.innerHeight);
}
gumb1.addEventListener("click",klik);
gumb2.addEventListener("click",ponisti);
gumb3.addEventListener("click",velicinaProzora);