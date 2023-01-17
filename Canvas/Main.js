function Init(){
    var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  // Draw bus body
  ctx.fillStyle = "#FCD900";
  ctx.fillRect(200, 50, 800, 400);
  ctx.fillStyle = "#00000";
  ctx.strokeRect(200,50,800,400);
  ctx.fillStyle = "#E8630A";
  ctx.fillRect(1000, 150, 200, 300);
  ctx.fillStyle = "#00000";
  ctx.strokeRect(1000,150,200,300);

  // Draw wheels
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(310, 480, 80, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(880, 480, 80, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "White";
  ctx.arc(310, 480, 40, 0, 2 * Math.PI);
  ctx.arc(880, 480, 40, 0, 2 * Math.PI);
  ctx.fill();

  // Draw windows
  ctx.fillStyle = "white";
  ctx.fillRect(250, 100, 700, 200);
  ctx.fillStyle = "#00000";
  ctx.strokeRect(250,100,700,200);
 // ctx.fillRect(100, 55, 40*2, 25*2);

 //passengers
 ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(340, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(300, 230, 80, 70);

ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(440, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(400, 230, 80, 70);

ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(540, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(500, 230, 80, 70);

ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(640, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(600, 230, 80, 70);

ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(740, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(700, 230, 80, 70);

ctx.beginPath();
 ctx.fillStyle = "#FFC3A1";
 ctx.arc(840, 200, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "#263159";
ctx.fillRect(800, 230, 80, 70);


}