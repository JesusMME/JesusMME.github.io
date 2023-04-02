//funciones
function playerEnd (win, score){
    clearInterval(interv);
    ctx.fillStyle = "#c8ff69";
    ctx.fillRect(0, 0, wCanva, hCanva);
    ctx.fillStyle = "black";
    ctx.font = "40px serif";
    if (win == true)
        ctx.fillText("GANASTE!", 100, 100);
    else{
        ctx.fillText("Perdiste, Intentalo de nuevo", 100, 100)
    }
    ctx.fillText("tiempo: " + score, 100, 150);
}
function scoreF(score){
    ctx.fillStyle = "white";
    ctx.font = "15px serif";
    ctx.fillText("Time: " + score, 20, 15);
    ctx.fillText("Lives: " + lives,20, 30)
}
function colision(enemieY, enemieX, axoX, axoY){
    if(axoX >= enemieX && axoX <= enemieX +100 && axoY >= enemieY && axoY <= enemieY){
        lives-= 1;
        positionXAjo = 200;
        positionYAjo = 450;
    }
    if(lives < 1){
        win = false;
    }
}
function enemies(enemieY, weightE, highE){
    ctx.fillStyle = "brown";
    tiempo += 5; 
    if(tiempo > 500)
        tiempo = -100; 
    ctx.fillRect(tiempo, enemieY, weightE, highE);
    colision(enemieY, tiempo, positionXAjo, positionYAjo);
}
// Peticiones
const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");
const input = document.getElementById("input");

//Variables
var wCanva = 450, hCanva = 500; 
var positionXAjo = 200, positionYAjo = 450;
var score = 0, points = 0;
var scores = [];
let text; 
var win = null;
let lives = 3; 
var tiempo = 0; 

    //const ajoImage = new Image();
    //ajoImage.src = "../../statics/img/ajo.png";

    //ajoImage.addEventListener("load", ()=>{
    //    carga += 1;
    //});

//    // una vez cargadas las imágenes se crea la función para la animación del salto 
// function jumpAjo(){
//     window.requestAnimationFrame(jumpAjo);
// }

// function swimLargeTent(){
//     window.requestAnimationFrame(swimLargeTent);
// }

// function backgroundWater(){
//     window.requestAnimationFrame(backgroundWater);
// }
ctx.fillStyle = "#58c6f5";
ctx.fillRect(0, 0, wCanva, hCanva);
//if(carga == 5){
    // //Aquí va el código del juego  
    let interv = setInterval (() =>{
        ctx.fillStyle = "#58c6f5";
        ctx.fillRect(0, 100, wCanva, hCanva- 100);
        ctx.fillStyle = "#805436";
        ctx.fillRect(0, 0, wCanva, 50);
        for(let i = 0; i < 9; i += 1){
            if(i % 2 == 0)
                ctx.fillRect(i*50, 50, 50, 50);    
        }
        // ctx.drawImage(ajoImage, positionXAjo, positionYAjo, 50, 50)    
        for(let i = 0; i < 300; i+=100){
            enemies(150 + i, 100, 50);   
        }
        ctx.fillStyle = "pink";
        ctx.fillRect(positionXAjo, positionYAjo, 50, 50);
        scoreF(score);
        console.log(tiempo);
        score++;
        if(win != null)
            playerEnd(win, score);
    }, 33);
    //Detectar eventos--------------------------------------------------
    input.addEventListener("keyup", (evento)=>{
        if(win != true){
            if(evento.keyCode == 40 && positionYAjo < 450){
                positionYAjo += 50;
            }else if(evento.keyCode == 38 && positionYAjo > 50 && (positionYAjo != 100 || positionXAjo!= 0 && positionXAjo!= 100 && positionXAjo!= 200 && positionXAjo!= 300 && positionXAjo!= 400)){
                positionYAjo -= 50;
            }else if(evento.keyCode == 39 && positionXAjo < 400){
                positionXAjo += 50;
                console.log(positionXAjo);
            }else if(evento.keyCode == 37 && positionXAjo > 0){
                positionXAjo -= 50;
            }
        }
        if(positionYAjo == 50){
            points += 1; 
            ctx.fillStyle = "pink";
            ctx.fillRect(positionXAjo, positionYAjo, 50, 50);
            positionXAjo = 200;
            positionYAjo = 450;
            if(points == 4){
                win = true;
                playerEnd(win, score);
            }
        }
    });
//}else{
// // imagen cargando
    // ctx.fillStyle = "#c1b6fa"
    // ctx.textAling = "center";
    // ctx.font = "40px serif";
    // ctx.fillText("Cargando contenido, por favor espere :)", 100, 200);
//}
