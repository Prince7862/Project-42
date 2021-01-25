var hr,mn,sc;

function setup() {
  createCanvas(1000,1000);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(7);
  noFill();

  
  stroke("#9b59b6");
  var mysecond = map(sc,0,60,0,360);
  scAngle = map(sc,0,60,0,360);
  arc(400,300,500,500,0, mysecond);
  

  
  stroke("#1abc9c");
  var myminute = map(mn,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  arc(400,300,480,480,0, myminute);
  

  stroke("#e74c3c");
  var myhour = map(hr % 12,0,12,0,360);
  arc(400,300,460,460,0, myhour);

  fill(0,255,255);
  noStroke();
  textSize(75);
  text(hr + ':' + mn + ':' + sc,275,325);
}