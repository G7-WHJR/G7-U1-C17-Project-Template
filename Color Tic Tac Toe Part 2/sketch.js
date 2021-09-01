// An array of all the colors used in this code.
var turn=0
function setup() {
    //size of the canvas to draw on
    createCanvas(innerWidth,innerHeight); 
    // Set the background to white, and move the line to setup();
    background("white");

    fill("#404040");
    rect(0, 0, width, 50);

    textAlign(CENTER);
    fill("White");
    textSize(18);
    text("COLOR TIC TAC TOE", width / 2, 33);
    fill("Black");
}


function draw()
{
 
 createRow(150)
 createRow(250)
 createRow(350)  

}

function createRow(y)
{
  for (x = 150; x < 450; x=x+100)
   {
       var b1= new Box(x, y, 100, 100); 
       b1.appear();   
   }  
}



    

function mousePressed() {
  posX=0
  posY=0
  if (mouseY < 250 && mouseX < 250 && mouseY > 150 && mouseX > 150) {
    
    posX=200
    posY=200
  } 
  else if (mouseX < 350 && mouseY < 250) {
    
    posX=300
    posY=200
  } 
  else if(mouseX < 450 && mouseY < 250) {
    
    posX=400
    posY=200
  } 
  else if(mouseX < 250 && mouseY < 350) {
    
    posX=200
    posY=300
  } 
  else if(mouseX < 350 && mouseY < 350) {
    
    posX=300
    posY=300
  } 
  else if() {
    
    
  } 
  else if() {
    
    
  } 
  else if() {
    
    
  }  
  else if() {
    
    
  } 
      

  if(turn%2==0)
  {
    fill("blue");
    circle(posX,posY,70); 
  }
  else{
    fill("red");
    circle(posX,posY,70);
  }

  turn=turn+1

  if(turn==9)
  {
    background("white")
    turn=0
  }
  
}