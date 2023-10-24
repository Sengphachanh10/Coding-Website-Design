const cat = document.getElementById('cat')
const btn = document.getElementById('btn')

const openMouthImg = "./open.png"
const closeMouthImg = "./close.png"

const openMoutSound = new Audio("./sound_sound-open.mp3")
const closeMoutSound = new Audio("./sound_sound-close.mp3")

btn.addEventListener('mousedown', openMouth)
btn.addEventListener('mouseup', closeMouth)

function openMouth(){
    cat.src = openMouthImg
    openMoutSound.play()
}

function closeMouth(){
    cat.src = closeMouthImg
    closeMoutSound.play()
}

