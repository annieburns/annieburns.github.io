
window.onload = function() {
  document.getElementById("button1").addEventListener('click', showAbout);
  document.getElementById("buttonX").addEventListener('click', hideAbout);
  document.getElementById("button2").addEventListener('click', showWork);
  document.getElementById("buttonX2").addEventListener('click', hideWork);

function showAbout() {
  const div = document.getElementById("aboutMe");
   if (div.style.display !== "none") {
      div.style.display = "none";
  }
  else {
      div.style.display = "block";
  }
   }

function hideAbout() {
  const div = document.getElementById("aboutMe");
    div.style.display = "none";
}


function showWork() {
  const div = document.getElementById("work");
  if (div.style.display !== "none") {
      div.style.display = "none";
  }
  else {
      div.style.display = "block";
  }
   }


function hideWork() {
  const div = document.getElementById("work");
    div.style.display = "none";
 }
}







