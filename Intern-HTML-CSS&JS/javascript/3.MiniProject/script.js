//add
let add = document.getElementById('add')

//remove
let remove = document.getElementById('remove')

//multiphication
let multiphication = document.getElementById('multiphication')

//division
let division = document.getElementById('division')

let Number = document.getElementById('number')
let Integer = 0

add.addEventListener('click', addFunction)
remove.addEventListener('click', removeFunction)
multiphication.addEventListener('click', multiphicationFunction)
division.addEventListener('click', divisionFunction)

function addFunction(){
    Integer += 1
    number.innerHTML = Integer
}
function removeFunction(){
    Integer -= 1
    number.innerHTML = Integer
}
function multiphicationFunction(){
    Integer *= 2
    number.innerHTML = Integer
}
function divisionFunction(){
    Integer /= 2
    number.innerHTML = Integer
}
