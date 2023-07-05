noseX=0;
noseY=0;

function preload() {
  clownNose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet foi inicializado');
}
poseNet = ml5.poseNet(video, modelLoaded);{
  poseNet.on('pose', gotPoses);
  /* gotPoses- Uma função que será chamada sempre que o evento 'pose' for disparado. 
  Essa função é responsável por lidar com as poses detectadas.*/
}

function modelLoaded() {
//É executada quando o modelo PoseNet é carregado com sucesso.
  console.log('PoseNet foi inicializado');
}

function gotPoses(results)
// Recebe um parametro 
{
  if(results.length > 0)
  // verifica se a variável results contém alguma pose detectada pelo modelo PoseNet

  {
    // Essa linha imprime o objeto results no console. 
    //Isso é útil para visualizar as informações das poses detectadas e depurar o código.

    console.log(results);

    // noseX = results[0].pose.nose.x;: Essa linha atribui à variável noseX a posição horizontal 
    //(coordenada x) do nariz da primeira pose detectada. A notação results[0] 
    noseX = results[0].pose.nose.x;

    //noseY = results[0].pose.nose.y;: Essa linha atribui à 
    //variável noseY a posição vertical (coordenada y) do nariz da primeira pose detectada. 

    noseY = results[0].pose.nose.y;

    // acessa o primeiro elemento do array results, e pose.nose.y acessa a coordenada y do nariz dessa pose.
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(clownNose, noseX, noseY, 30, 30);
}

function takeSnapshot(){    
  save('myFilterImage.png');
}
