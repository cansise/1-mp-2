var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// code block //

document.querySelector(".vert").addEventListener("click", changefondvert);

function changefondvert() {
    document.querySelector(".block").style.background='#6BCB77';
    document.querySelector(".vert").style.background='#FAEEE7';
    document.querySelector(".jaune").style.background='#FFD93D';
    document.querySelector(".rose").style.background='#FF6B6B';
}

document.querySelector(".jaune").addEventListener("click", changefondjaune);

function changefondjaune() {
    document.querySelector(".block").style.background='#FFD93D';
    document.querySelector(".jaune").style.background='#FAEEE7';
    document.querySelector(".vert").style.background='#6BCB77';
    document.querySelector(".rose").style.background='#FF6B6B';
}

document.querySelector(".rose").addEventListener("click", changefondrose);

function changefondrose() {
    document.querySelector(".block").style.background='#FF6B6B';
    document.querySelector(".rose").style.background='#FAEEE7';
    document.querySelector(".vert").style.background='#6BCB77';
    document.querySelector(".jaune").style.background='#FFD93D';
}



document.querySelector(".jaune").style.background='#FAEEE7';


// code reservation //

var ageInput = document.getElementById("ageInput");
  var ageOutput = document.getElementById("ageOutput");
  
  ageInput.addEventListener("input", function() {
    ageOutput.textContent = ageInput.value;
  });