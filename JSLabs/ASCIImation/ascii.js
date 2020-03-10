"use strict";
var timer = null; 
var speed = 250; 
var counter = 0;
window.onload = function(){
    document.getElementById("animation").onchange = diplayChange; 
    document.getElementById("start").onclick = startAnimation; 
    document.getElementById("stop").onclick = stopAnimation; 
    document.getElementById("size").onclick = changeFont; 
    document.getElementById("speed").onchange = speedChange; 
}

function diplayChange(){
    console.log("change detected")
    var animationType = document.getElementById("animation").value; 

    var tArea =  document.getElementById("tarea"); 
    tArea.value = ANIMATIONS[animationType]; 

    console.log(animationType)

}

function startAnimation(){
    var text = document.getElementById("tarea").value; 
    document.getElementById("stop").disabled = false;
    document.getElementById("start").disabled = true;
    document.getElementById("animation").disabled = true; 
    document.getElementById("size").disabled = true; 
    var animParts = text.split("====="); 

    if( document.getElementById("speed").checked)
        speed = 50

    timer = setInterval(function(){
        console.log(speed)
        console.log(animParts[counter])
        document.getElementById("tarea").value = animParts[counter]; 
        counter++; 
        if(counter == animParts.length)
            counter = 0; 
    }, speed); 
}

function stopAnimation(){
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = false;
    document.getElementById("animation").disabled = false; 
    document.getElementById("size").disabled = false; 
    clearInterval(timer); 
        timer = null;
        var animationType = document.getElementById("animation").value; 
        var tArea =  document.getElementById("tarea"); 
    tArea.value = ANIMATIONS[animationType]; 
        
        counter = 0
}

function changeFont(){
   var textArea = document.getElementById("tarea"); 
   textArea.style.fontSize= document.getElementById("size").value
}

function speedChange(){
    if(speed == 250)
        speed = 50
    else 
        speed = 50 
}