document.addEventListener("DOMContentLoaded",hide)
function hide(){
    let b = ["pepe","juus","kink","jauh","kebab","tonn","vega"]
   document.getElementById("pepe").style.display="none"
   document.getElementById("juus").style.display="none"
   document.getElementById("kink").style.display="none"
   document.getElementById("jauh").style.display="none"
   document.getElementById("kebab").style.display="none"
   document.getElementById("tonn").style.display="none"
   document.getElementById("vega").style.display="none"
   document.getElementById("fan").style.display="none"
   if(localStorage.getItem("pep")!=="0"){
       document.getElementById("pepe").style.display="block"
   }
   if(localStorage.getItem("juu")!=="0"){
    document.getElementById("juus").style.display="block"
}
if(localStorage.getItem("kin")!=="0"){
    document.getElementById("kink").style.display="block"
}
if(localStorage.getItem("jau")!=="0"){
    document.getElementById("jauh").style.display="block"
}
if(localStorage.getItem("keb")!=="0"){
    document.getElementById("kebab").style.display="block"
}
if(localStorage.getItem("ton")!=="0"){
    document.getElementById("tonn").style.display="block"
}
if(localStorage.getItem("veg")!=="0"){
    document.getElementById("vega").style.display="block"
}
let as = Object.keys(localStorage)
let a = ["pep","juu","kin","jau","keb","ton","veg"]
let c = ["count","count_ju","count_ki","count_ja","count_ke","count_to","count_ve"]
let e = ["hinta","hinta_ju","hinta_ki","hinta_ja","hinta_ke","hinta_to","hinta_ve"]
for (let i = 0;i<as.length;i++){
    for (u=0;u<=6;u++){
    if(as=a[u]){
        let b = localStorage.getItem(a[u])
        document.getElementById(c[u]).textContent = b
        let d = b*10
        document.getElementById(e[u]).textContent = d+",00€"
    }
}
}
let f = parseInt(document.getElementById("hinta").textContent)+parseInt(document.getElementById("hinta_ju").textContent)+parseInt(document.getElementById("hinta_ki").textContent)+parseInt(document.getElementById("hinta_ja").textContent)+parseInt(document.getElementById("hinta_ke").textContent)+parseInt(document.getElementById("hinta_to").textContent)+parseInt(document.getElementById("hinta_ve").textContent)
document.getElementById("total").textContent = f+",00€"
let g = parseInt(document.getElementById("count").textContent)+parseInt(document.getElementById("count_ju").textContent)+parseInt(document.getElementById("count_ki").textContent)+parseInt(document.getElementById("count_ja").textContent)+parseInt(document.getElementById("count_ke").textContent)+parseInt(document.getElementById("count_to").textContent)+parseInt(document.getElementById("count_ve").textContent)
document.getElementById("valinta").textContent = g+" valintaa"
}
function poista(h){
    localStorage.setItem(h,0)
    window.location.reload();
}
function poista_kaikki(){
    localStorage.setItem("pep",0)
    localStorage.setItem("juu",0)
    localStorage.setItem("kin",0)
    localStorage.setItem("jau",0)
    localStorage.setItem("keb",0)
    localStorage.setItem("ton",0)
    localStorage.setItem("veg",0)
    window.location.reload();
}