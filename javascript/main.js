let tooglebox = false;

let boxdisplays = function(){
    let boxmen = document.querySelector(".boxmen");
    let boxmenn = document.querySelector(".boxmenn");
    let boxmennn = document.querySelector(".boxmennn");

    if (tooglebox === false){
        boxmenn.style.visibility = "hidden"
        boxmennn.style.visibility="hidden";
        boxmen.style.visibility = "visible";
        
        tooglebox = true 
    }
    else if (tooglebox === true){
        boxmennn.style.visibility = "hidden";
        boxmenn.style.visibility = "hidden";
        boxmen.style.visibility = "visible";
        tooglebox = false;
    }
}
let tooglebox1 = false;
let boxdisplays1 = function(){
    let boxmenn = document.querySelector(".boxmenn");
    let boxmen = document.querySelector(".boxmen");
    let boxmennn = document.querySelector(".boxmennn");
    if (tooglebox1 === false){
        boxmennn.style.visibility="hidden";
        boxmen.style.visibility = "hidden";
        boxmenn.style.visibility = "visible";
        tooglebox1 = true
    }
    else if (tooglebox1 === true){
        boxmennn.style.visibility = "hidden";
        boxmen.style.visibility = "hidden";
        boxmenn.style.visibility = "visible";
        tooglebox1 = false;
    }
}
let tooglebox2 = false;
let boxdisplays2 = function(){
    let boxmenn = document.querySelector(".boxmenn");
    let boxmen = document.querySelector(".boxmen");
    let boxmennn = document.querySelector(".boxmennn");
    if (tooglebox1 === false){
        boxmen.style.visibility = "hidden";
        boxmenn.style.visibility = "hidden";
        boxmennn.style.visibility="visible";
        tooglebox1 = true
    }
    else if (tooglebox1 === true){
        boxmennn.style.visibility = "hidden";
        boxmen.style.visibility = "hidden";
        boxmenn.style.visibility = "visible";
        tooglebox1 = false;
    }
}