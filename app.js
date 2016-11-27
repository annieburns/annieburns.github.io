window.onload = function() {
  document.getElementById("button1").addEventListener('click', showAbout);
  document.getElementById("button2").addEventListener('click', hideAbout);
  document.getElementById("button3").addEventListener('click', hideAbout);

  document.getElementById("button2").addEventListener('click', showWork);
  document.getElementById("button1").addEventListener('click', hideWork);
  document.getElementById("button3").addEventListener('click', hideWork);

  document.getElementById("button3").addEventListener('click', showContact);
  document.getElementById("button2").addEventListener('click', hideContact);
  document.getElementById("button1").addEventListener('click', hideContact);

  document.getElementById("buttonX").addEventListener('click', hideAbout);
  document.getElementById("buttonX2").addEventListener('click', hideWork);
  document.getElementById("buttonX3").addEventListener('click', hideContact);


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


function showContact() {
  const div = document.getElementById("contact");
  if (div.style.display !== "none") {
      div.style.display = "none";
  }
  else {
      div.style.display = "block";
  }
   }


function hideContact() {
  const div = document.getElementById("contact");
    div.style.display = "none";
 }
}







