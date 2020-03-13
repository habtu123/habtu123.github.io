$(document).ready(function() {
    'user strict'
    var loss = false;
    var start = false; 
    let legalBoundary = $("div.boundary"); 

    const WINNING_MESSAGE = "You win :] Click the \"S\" to play gain."; 
    const SORRY_MESSAGE = "Sorry, you lost! Click the \"S\" to play gain."

    $("#maze").mouseleave(function(){
        console.log("mouse left")
        if(start)
            {
                console.log("out of bounce")                
                $(".boundary").addClass("youlose")
                console.log("foundClass")
                $("#status").text(SORRY_MESSAGE)
                loss = true; 
                start = false; 
            }
    })
    $("#start").click(function(){
        $(".boundary").removeClass("youlose")
        loss = false;
        start = true; 
        console.log("game started...")
    }) 
    $(".boundary").mouseover(function(){
        if(start){
        console.log("touched wall")
        $(".boundary").addClass("youlose")
        console.log("foundClass")
        $("#status").text(SORRY_MESSAGE)
        loss = true; 
        start = false; 
        }
    })

    $("#end").click(function(){
        if(start && !loss){
           
            start = false; 
            loss = false; 
            $("#status").text(WINNING_MESSAGE)
        }
        else{
            start = false; 
            loss = false; 
            $("#status").text(SORRY_MESSAGE)
    
        }
    }) 



})