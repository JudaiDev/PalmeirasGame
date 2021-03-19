alert("Developed by: JudaiDev. Enjoy the Game!")

function setup() {
  createCanvas(500, 400);
  SomDaTrilha.loop();

}

function draw() {
  background(ImagemEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  volta_posição();
  vfColisão();
  incluiPontos();
  marcaPonto();
  

}