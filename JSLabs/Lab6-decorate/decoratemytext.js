window.onload = function(){
    document.getElementById("bigger").onclick=this.timerBigger; 
    document.getElementById('igpay').onclick = this.igpayAninlay; 
    document.getElementById('malkovitch').onclick = this.malkovitch; 

}
timer = null; 
function timerBigger(){
    if(timer === null)
        timer = setInterval(bigger, 1000); 
    else{
        clearInterval(timer); 
        timer = null; 
    }
}
function bigger(){
  var size = parseInt(document.getElementById("my-text").style.fontSize)
   console.log("current size "+size)
   if(!size){
       size = 12; 
   }
   size += 2; 
   console.log(size)
  document.getElementById("my-text").style.fontSize = size +"pt"; 

}

function decorate(){
    var chBox = document.getElementById("myCheck"); 

    if(chBox.checked){
        document.getElementById("my-text").style.fontWeight = "bold";
        document.getElementById("my-text").style.textDecoration = "underline"; 
        document.getElementById("my-text").style.color = "green"; 
        document.getElementById("mainBody").style.backgroundImage= "url('../img/hundred-dollar-bill.jpg')"

    }
    else{
        document.getElementById("my-text").style.fontWeight = "normal";
        document.getElementById("my-text").style.textDecoration = "none"; 
        document.getElementById("my-text").style.color = "black"; 
        document.getElementById("mainBody").style.backgroundImage=""; 
    }

}

function igpayAninlay(){
  
    var text = document.getElementById("my-text").value; 
    var textArray = []; 
     textArray = text.split(" ");

     var updateText = []

     for(word in textArray){
         let w = textArray[word]; 
         if(w.charAt(0).match(/^[aeiou]/gm)){
            let sub = w.substring(1,w.length); 
            let newW = sub + w.charAt(0) + "-ay"; 

            updateText.push(newW); 
         }
         else{
            updateText.push(textArray[word] + "-ay")
         }
     }

    console.log(updateText)

    document.getElementById("my-text").value = updateText.join(" ")
}

function malkovitch(){
    console.log("malkovitch")
    var text = document.getElementById("my-text").value; 
    var textArray = []; 
    var changedArray = []
     textArray = text.split(" ");


    for(word in textArray){
        var nextword = textArray[word]; 
        if(nextword.length >= 5){
            nextword = "Malkovitch"
        }
        
        changedArray.push(nextword)
    }    

    document.getElementById("my-text").value = changedArray.join(" "); 
}
