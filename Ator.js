let yAtor = 366;
let xAtor = 86;
let colisão = false;
let meusPontos = 0

function mostraAtor(){
  image(ImagemAtor, xAtor, yAtor, 45, 34);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
}
  
  if (keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
}
  
  if (keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
}
  
    
if (keyIsDown(DOWN_ARROW)){
  if(canBaixo()){  
  yAtor += 2;
    }
  }
}

function vfColisão(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < ImagemCarros.length; i += 1){
    colisão = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if (colisão){
      colidiu();
      if (maiorZero()){
      meusPontos -=1;
      }
    }
  }
}

function colidiu(){
  yAtor = 366;
}


function textotela(){
  text("Anos Sem Mundial: ", width/5, 35)
  textSize(25)
  
}


function incluiPontos(){
   textAlign(CENTER)
   textSize(25)
   fill(255,140,0)
   text(meusPontos, width/5, 17)
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    colidiu();
  }
}

function maiorZero(){
  return meusPontos > 0
}

function canBaixo(){
 return yAtor < 366;  
}