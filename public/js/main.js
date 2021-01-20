//função que cria o relógio
//function that´s creat the timer
function creatTime (seconds) {
    
    const data = new Date(seconds * 1000);//transforma os milesimos de segundos em segundos| turns milliseconds to seconds
    return data.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}

//seleção dos elementos no html
//selection of the elements in the html
const clock = document.querySelector('.clock');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0; //variavel que conta os segundos| variable that´s controls the seconds

let timer;

//função que inicia o relogio
//function that´s begin the timer
function iniciaRelogio () {
    timer = setInterval(function () {
        segundos++; //soma 1 segundo na variável| add 1 second on variable
        clock.innerHTML = creatTime(segundos); //atualiza o elemento HTML
    }, 1000);
}

//inicia o relogio a partir do clique no botão iniciar 
//starts the timer by clicking the 'iniciar' button
iniciar.addEventListener('click', function (event) {
    clock.classList.remove('pausado'); //volta a cor original da fonte do timer| returns to the original color of the timer font
    clearInterval(timer); //evita que mais de um relogio se inicie ao mesmo tempo| prevents more than one timer from starting at the same time
    iniciaRelogio();
});

//pausa o relogio a partir do clique no botão pausar 
//pause the timer by clicking the 'pausar' button
pausar.addEventListener('click', function (event) {
    clock.classList.add('pausado'); //muda a cor da fonte quando o timer esta pausado| changes the font color when the timer is paused
    iniciar.innerHTML = `<img src="../../public/images/rotate-clockwise.svg" alt="iniciar o timer"><span>retomar</span>`; //muda o icone e o texto do botão iniciar para 'retomar'|change the icon and the text of the 'iniciar' button to 'retomar'
    clearInterval(timer);
});

//zera o relogio a partir do clique no botão zerar 
//reset the timer by clicking the 'zerar' button
zerar.addEventListener('click', function (event) {
    clock.classList.remove('pausado'); //volta a cor original da fonte do timer| returns to the original color of the timer font  

    //volta o botão 'iniciar' ao normal| return the 'iniciar' button to normal
    iniciar.innerHTML = `<img src="../../public/images/player-play.svg" alt="iniciar o timer"><span>iniciar</span>`; 
    clearInterval(timer);
    clock.innerHTML = '00:00:00'; //zera o timer| resets the timer
    segundos = 0; //zera a variavel que controla os segundos do timer| resets the variable that controls the timer seconds
});