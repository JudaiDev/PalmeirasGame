
let yCarros = [349, 76, 280, 90, 100, 110]
let xCarros = [400, 300, 250, 450, 100, 223];
let velocidadeCarros = [5, 5, 5, 5, 5, 1];
let comprimentoCarro = 45;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < ImagemCarros.length; i+=1){
    image(ImagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < xCarros.length; i+=1){
  xCarros[i] -= velocidadeCarros[i];
  }
}

function volta_posição(){
  for (let i = 0; i < xCarros.length; i++){
 if (passouTela(xCarros[i])){
    xCarros[i] = 600;
 }
  }
}


function passouTela(xCarros){
  return xCarros< - 50;
}