var b1 = document.getElementById("bubble-1");
var b2 = document.getElementById("bubble-2");
var b3 =  document.getElementById("bubble-3");
var b4 =  document.getElementById("bubble-4");
var card2 = document.getElementById("card2");
var card = document.getElementById("cards");
function start(){
        if (b1.style.display == "none") {
           b1.style.display = "block";
       } else {
           b1.style.display = "none";
           card.style.display="block";
         b2.style.display="block";
        }
 
}

function step1(){
      
       if (b2.style.display == "none") {
           b2.style.display = "block";
         
       } else {
           b2.style.display = "none";
         b1.style.display="none"
         card.style.display="none"
         b3.style.display="block";
       }
}

function step2(){
 
       if (b3.style.display == "none")  {
           b3.style.display = "block";
       } else {
         b2.style.display = "none";
         b1.style.display="none"
           b3.style.display = "none";
         card2.style.display="block"
         b4.style.display="block";
       }
}

function step3(){
         if (b4.style.display == "none") {
           b4.style.display = "block";
       } else {
           b4.style.display = "none";
         card2.style.display="none"
         b1.style.display="block";
         // step1();
       }
}
//hide and show 