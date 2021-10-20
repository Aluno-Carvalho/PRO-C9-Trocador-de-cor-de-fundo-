
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);
  box.shapeColor = ("black");
  
}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
 
    

  if (keyIsDown(87)) 
  {
    background("blue");
    box.position.y -= 5;
    
  }
 
    if (keyIsDown(65)) 
  {
    background("yellow");
    box.position.x -= 5;
   
  }

  if (keyIsDown(83)) 
  {
    background("green");
    box.position.y += 5;
  } 

  if(keyIsDown(68)){
    background("red");
    box.position.x += 5
  }

  if(box.position.x > 400 || box.position.x < 0 || box.position.y > 400 || box.position.y < 0){
    box.position.x = 200;
    box.position.y = 200;
  }

  text("Pressione as teclas (W,A,S,D) para mudar a cor do plano de fundo", 17,150);

  drawSprites();
}

