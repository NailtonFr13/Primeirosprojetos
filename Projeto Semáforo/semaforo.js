const Verde = document.getElementById('Verde')
const Amarelo = document.getElementById('Amarelo')
const Vermelho = document.getElementById('Vermelho')
const Semaforo = document.getElementById('Semaforo')

function SinalVerde(){
       Semaforo.src='./img/verde.jpg'
}
function SinalAmarelo(){
    Semaforo.src='./img/amarelo.jpg'
}
function SinalVermelho(){
    Semaforo.src='./img/vermelho.jpg'
}

Verde.addEventListener('click', SinalVerde)
Amarelo.addEventListener('click', SinalAmarelo)
Vermelho.addEventListener('click', SinalVermelho)
