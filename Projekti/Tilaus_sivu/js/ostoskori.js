document.addEventListener("DOMContentLoaded",hide)
document.addEventListener("DOMContentLoaded",hidea)
document.addEventListener("DOMContentLoaded",hideb)
function hidea(){
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
    document.getElementById("total").textContent = "Hinta "+f+",00€"
    let g = parseInt(document.getElementById("count").textContent)+parseInt(document.getElementById("count_ju").textContent)+parseInt(document.getElementById("count_ki").textContent)+parseInt(document.getElementById("count_ja").textContent)+parseInt(document.getElementById("count_ke").textContent)+parseInt(document.getElementById("count_to").textContent)+parseInt(document.getElementById("count_ve").textContent)
    document.getElementById("valinta").textContent = g+" valintaa"
    localStorage.setItem("fuu",g)
}
function hideb(){
    if(localStorage.getItem("pep")!=="0"){
        document.getElementById("pepe").style.display="flex"
    }
    if(localStorage.getItem("juu")!=="0"){
     document.getElementById("juus").style.display="flex"
 }
 if(localStorage.getItem("kin")!=="0"){
     document.getElementById("kink").style.display="flex"
 }
 if(localStorage.getItem("jau")!=="0"){
     document.getElementById("jauh").style.display="flex"
 }
 if(localStorage.getItem("keb")!=="0"){
     document.getElementById("kebab").style.display="flex"
 }
 if(localStorage.getItem("ton")!=="0"){
     document.getElementById("tonn").style.display="flex"
 }
 if(localStorage.getItem("veg")!=="0"){
     document.getElementById("vega").style.display="flex"
 }
}
function hide(){
    
if(localStorage.getItem("kuljetus")=="kylla"){
    document.getElementById("koti_osoite").style.display="block"
}
if(localStorage.getItem("kysy")=="kylla"){
    document.getElementById("q").style.display="block"
    document.getElementById("oga").style.display="none"
    document.getElementById("tilaa").style.display="none"
    document.getElementById("aika").style.display="none"
}
if(localStorage.getItem("tek")=="kylla"){
    document.getElementById("teksti").style.display="block"
}
if(localStorage.getItem("aika")=="kylla"){
    document.getElementById("oga").style.display="none"
    document.getElementById("q").style.display="block"
    document.getElementById("ksy").style.display="none"
    document.getElementById("kss").style.display="none"
    document.getElementById("tilaa").style.display="none"
    let p = localStorage.getItem("fuu")
    let r = p*10+parseInt(localStorage.getItem("a3"))+parseInt(localStorage.getItem("310"))+parseInt(localStorage.getItem("1020"))
    document.getElementById("aika").textContent = "Toimituksessa menee "+r+" minuuttia"

}if(localStorage.getItem("vika")=="kylla"){
    document.getElementById("oga").style.display="none"
    document.getElementById("q").style.display="block"
    document.getElementById("ksy").style.display="none"
    document.getElementById("kss").style.display="none"
    document.getElementById("tilaa").style.display="none"
    let x = localStorage.getItem("fuu")
    let z = x*10
    document.getElementById("aika").textContent = "pizzaan menee "+z+" minuuttia"
}if(localStorage.getItem("ti")=="kylla"){
    document.getElementById("q").style.display="block"
    document.getElementById("aika").style.display="none"
    document.getElementById("oga").style.display="none"
}
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
function kuljetus(){
localStorage.setItem("kuljetus", "kylla")
localStorage.setItem("nouto","ei")
window.location.reload();
}

function n(){
localStorage.setItem("kuljetus", "ei")
localStorage.setItem("nouto","kylla")
window.location.reload();
}
function vahvista(){
if(localStorage.getItem("nouto")=="kylla"){
    localStorage.setItem("vika","kylla")
}else if(localStorage.getItem("kuljetus")=="kylla"){
    if(document.getElementById("koti_osoite").value==""){
        window.alert("jokin on pielessä")
    }else{
        localStorage.setItem("kysy","kylla")
    }
}else{
window.alert("jokin on pielessä")
}
window.location.reload();
}
function guu(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",5)
    localStorage.setItem("310",0)
    localStorage.setItem("1020",0)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function gaa(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",0)
    localStorage.setItem("310",10)
    localStorage.setItem("1020",0)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function gii(){
    localStorage.setItem("kysy","e")
    localStorage.setItem("a3",0)
    localStorage.setItem("310",0)
    localStorage.setItem("1020",20)
    localStorage.setItem("ti","kylla")
    window.location.reload();
}
function tiloo(){
    localStorage.setItem("kuljetus","e")
    localStorage.setItem("aika","kylla")
    localStorage.setItem("ti","ei")
    window.location.reload();
}
function kitiin(){
    localStorage.setItem("nouto","eeee")
    localStorage.setItem("kuljetus","eeee")
    localStorage.setItem("vika","eeeee")
    localStorage.setItem("kysy","eeeee")
    localStorage.setItem("aika","eeeee")
    localStorage.setItem("tek","eeeeee")
}
