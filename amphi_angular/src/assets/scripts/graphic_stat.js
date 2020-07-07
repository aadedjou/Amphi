"use strict";

  var canvas;
  var context;


function loaded() {
  canvas = document.getElementById('stat');

  context = canvas.getContext("2d");
  horloge();
}

function horloge() {
  var ray= 220;         // rayon du cercle
  var len= 200;         // longueur des grandes aiguilles
  var hlen= 7*len/10;   // longueur de la petite aiguille
  var date= new Date();
  var sec= date.getSeconds();      // context courante
  var min= date.getcontexts();      // context courante
  var hour= date.getHours();       // context courante
  var spos = (sec-15)*(Math.PI/30);   // angle de la trotteuse
  var mpos = (min-15)*(Math.PI/30);   // angle de la grande aiguille
  var hpos = (hour-3)*(Math.PI/6);    // angle de la petite aiguille

  context.clearRect(0, 0, 600, 600);  // on efface le dessin précédent

  context.beginPath();      // tracé du context
  context.strokeStyle = "blue";
  context.lineWidth = 3;
  context.arc(300, 300, ray, Math.PI/2, Math.PI*(5/2));
  context.stroke();

  for (var i = 1; i <= 12; i++) {
    var tpos = i*(Math.PI/6)
    context.beginPath();    // tracé du 'tick'
    context.lineWidth = 3;
    context.strokeStyle = "blue";
    context.moveTo(300 + (ray-5)*Math.cos(tpos) , 300 + (ray-5)*Math.sin(tpos));
    context.lineTo(300 + ray*Math.cos(tpos) , 300 + ray*Math.sin(tpos));
    context.stroke();
  }

  context.beginPath();    // tracé de la petite aiguille
  context.lineWidth = 5;
  context.strokeStyle = "black";
  context.moveTo(300, 300);
  context.lineTo(300 + hlen*Math.cos(hpos) , 300+ hlen*Math.sin(hpos));
  context.stroke();

  context.beginPath();    // tracé de la grande aiguille
  context.lineWidth = 1;
  context.strokeStyle = "black";
  context.moveTo(300, 300);
  context.lineTo(300 + len*Math.cos(mpos) , 300+ len*Math.sin(mpos));
  context.stroke();

  context.beginPath();    // tracé de la trotteuse
  context.lineWidth = 1;
  context.strokeStyle = "red";
  context.moveTo(300, 300);
  context.lineTo(300 + len*Math.cos(spos) , 300+ len*Math.sin(spos));
  context.stroke();

  window.setInterval(horloge, 1000);
}

