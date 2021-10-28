document.getElementById('pinkButton').onclick = switchPink;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchPink() {
   document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
      
}

function switchWhite() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
    
}
function switchBlue() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(76, 95, 179)';
    
}
function switchYellow() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'rgb(235, 236, 140)';
    
}


var buttonColor = document.getElementById("ColorChange");

buttonColor.onclick = function() {
    document.getElementById("test").style.color = "red";
    
}

var buttonColor = document.getElementById("ColorChange2");

buttonColor.onclick = function() {
    document.getElementById("test").style.color = "black";
    
}