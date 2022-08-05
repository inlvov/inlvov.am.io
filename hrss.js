// Used to toggle the menu on smaller screens when clicking on the menu button
function openNav() {

  var x = document.getElementById("navDemo");
  var y = document.getElementById("org-events");



  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    y.style.marginTop = "250" + "px";
  } else { 
    x.className = x.className.replace(" w3-show", "");
     y.style.marginTop = "0" + "px";
  }


}




function reveal(){

var reveals = document.querySelectorAll(".reveal");

for (var i = 0;  i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var revealTop = reveals[i].getBoundingClientRect().top;
  var revealPoint = 150;

 if (revealTop < windowHeight - revealPoint) {
  
  reveals[i].classList.add("active");
 }else{
  // reveals[i].classList.remove("active");
 }
}
}



function reveal1(){

  var reveals1 = document.querySelectorAll(".reveal1");

for (var i = 0;  i < reveals1.length; i++) {
  var windowHeight = window.innerHeight;
  var revealTop = reveals1[i].getBoundingClientRect().top;
  var revealPoint = 150;

 if (revealTop < windowHeight - revealPoint) {
  
  reveals1[i].classList.add("active");
 }else{
  // reveals1[i].classList.remove("active");
 }
}

}


function reveal2(){

  var reveals1 = document.querySelectorAll(".reveal2");

for (var i = 0;  i < reveals1.length; i++) {
  var windowHeight = window.innerHeight;
  var revealTop = reveals1[i].getBoundingClientRect().top;
  var revealPoint = 150;

 if (revealTop < windowHeight - revealPoint) {
  
  reveals1[i].classList.add("active");
 }else{
  // reveals1[i].classList.remove("active");
 }
}

}


function reveal3(){

  var reveals1 = document.querySelectorAll(".reveal3");

for (var i = 0;  i < reveals1.length; i++) {
  var windowHeight = window.innerHeight;
  var revealTop = reveals1[i].getBoundingClientRect().top;
  var revealPoint = 150;

 if (revealTop < windowHeight - revealPoint) {
  
  reveals1[i].classList.add("active");
 }else{
  // reveals1[i].classList.remove("active");
 }
}

}

function reveal4(){

  var reveals1 = document.querySelectorAll(".reveal4");

for (var i = 0;  i < reveals1.length; i++) {
  var windowHeight = window.innerHeight;
  var revealTop = reveals1[i].getBoundingClientRect().top;
  var revealPoint = 150;

 if (revealTop < windowHeight - revealPoint) {
  
  reveals1[i].classList.add("active");
 }else{
  // reveals1[i].classList.remove("active");
 }
}

}


$(document).ready(function(){

$('.counting').counterUp({
    delay: 15,
    time: 2000
});

});

