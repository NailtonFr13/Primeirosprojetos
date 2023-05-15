const On = document.getElementById('On')
const Off = document.getElementById('Off')
const lampada = document.getElementById('lampada')

function lampadaOn() {
    lampada.src='./img/ligada.png'
}
function lampadaOff() {
    lampada.src='./img/dsligada.png'
}

On.addEventListener('click', lampadaOn)
Off.addEventListener('click', lampadaOff)
lampada.addEventListener('mouseover', lampadaOn)
lampada.addEventListener('mouseleave', lampadaOff)